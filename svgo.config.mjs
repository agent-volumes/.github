/** @type {import('svgo').Config} */
export default {
  multipass: true,
  plugins: [
    'preset-default',
    'removeXMLNS',
    { name: 'prefixIds' },
  ],
};
