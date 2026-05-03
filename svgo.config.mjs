/** @type {import('svgo').Config} */
export default {
  multipass: true,
  plugins: [
    'preset-default',
    { name: 'prefixIds' },
  ],
};
