import sys
import numpy as np
from collections import deque
from PIL import Image, ImageFilter

SRC = r'C:\Users\Home\.copilot\session-state\fd2009d2-e7bc-4276-adef-da1fc26c4c9d\files\ESPORA-brand-board-v2.jpg'
src = Image.open(SRC).convert('RGB')


def flood_background(arr, tol):
    h, w, _ = arr.shape
    bg = np.zeros((h, w), dtype=bool)
    q = deque()
    seeds = [(0, x) for x in range(w)] + [(h - 1, x) for x in range(w)]
    seeds += [(y, 0) for y in range(h)] + [(y, w - 1) for y in range(h)]
    ref = []
    for y, x in seeds:
        ref.append(arr[y, x].astype(int))
    ref = np.median(np.array(ref), axis=0)
    for y, x in seeds:
        if not bg[y, x] and np.abs(arr[y, x].astype(int) - ref).max() <= tol:
            bg[y, x] = True
            q.append((y, x))
    while q:
        y, x = q.popleft()
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not bg[ny, nx]:
                if np.abs(arr[ny, nx].astype(int) - ref).max() <= tol:
                    bg[ny, nx] = True
                    q.append((ny, nx))
    return bg


def largest_component(mask):
    h, w = mask.shape
    seen = np.zeros_like(mask)
    best = None
    best_size = 0
    for sy in range(h):
        for sx in range(w):
            if mask[sy, sx] and not seen[sy, sx]:
                q = deque([(sy, sx)])
                seen[sy, sx] = True
                comp = []
                while q:
                    y, x = q.popleft()
                    comp.append((y, x))
                    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                        ny, nx = y + dy, x + dx
                        if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not seen[ny, nx]:
                            seen[ny, nx] = True
                            q.append((ny, nx))
                if len(comp) > best_size:
                    best_size = len(comp)
                    best = comp
    out = np.zeros_like(mask)
    for y, x in best:
        out[y, x] = True
    return out


def cut(box, name, tol=34, keep_largest=True, min_frac=0.0, out_dir='assets/'):
    crop = src.crop(box)
    arr = np.array(crop)
    fg = ~flood_background(arr, tol)
    if keep_largest:
        fg = largest_component(fg)
    elif min_frac:
        pass
    alpha = Image.fromarray((fg * 255).astype(np.uint8))
    alpha = alpha.filter(ImageFilter.MinFilter(3))
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.7))
    rgba = crop.convert('RGBA')
    rgba.putalpha(alpha)
    bbox = rgba.getbbox()
    rgba = rgba.crop(bbox)
    rgba.save(out_dir + name, optimize=True)
    print(name, rgba.size)


if __name__ == '__main__':
    pass
