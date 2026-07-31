import type Lenis from 'lenis';

let _lenis: Lenis | null = null;
const _callbacks: ((lenis: Lenis) => void)[] = [];

export const getLenis = () => _lenis;

export const setLenis = (lenis: Lenis) => {
  _lenis = lenis;
  _callbacks.splice(0).forEach(cb => cb(lenis));
};

export const onLenisReady = (cb: (lenis: Lenis) => void) => {
  if (_lenis) cb(_lenis);
  else _callbacks.push(cb);
}
