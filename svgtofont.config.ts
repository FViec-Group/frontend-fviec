import path from 'node:path';
import { SvgToFontOptions } from 'svgtofont';

export default {
  fontName: 'fv',
  src: path.resolve(process.cwd(), 'public/icons/svgs'), // svg path
  dist: path.resolve(process.cwd(), 'public/icons/fonts'), // output path
  emptyDist: true,
  outSVGReact: false,
  outSVGPath: false,
  website: {
    title: 'FV Icons Generator',
  },
} as SvgToFontOptions;
