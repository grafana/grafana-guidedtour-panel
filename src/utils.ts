const colors: Record<string, string> = {};
[
  {
    name: 'red',
    shades: [
      { color: '#FF7383', name: 'super-light-red' },
      { color: '#F2495C', name: 'light-red' },
      { color: '#E02F44', name: 'red', primary: true },
      { color: '#C4162A', name: 'semi-dark-red' },
      { color: '#AD0317', name: 'dark-red' },
    ],
  },
  {
    name: 'orange',
    shades: [
      { color: '#FFB357', name: 'super-light-orange', aliases: [] },
      { color: '#FF9830', name: 'light-orange', aliases: [] },
      { color: '#FF780A', name: 'orange', aliases: [], primary: true },
      { color: '#FA6400', name: 'semi-dark-orange', aliases: [] },
      { color: '#E55400', name: 'dark-orange', aliases: [] },
    ],
  },
  {
    name: 'yellow',
    shades: [
      { color: '#FFEE52', name: 'super-light-yellow', aliases: [] },
      { color: '#FADE2A', name: 'light-yellow', aliases: [] },
      { color: '#F2CC0C', name: 'yellow', aliases: [], primary: true },
      { color: '#E0B400', name: 'semi-dark-yellow', aliases: [] },
      { color: '#CC9D00', name: 'dark-yellow', aliases: [] },
    ],
  },
  {
    name: 'green',
    shades: [
      { color: '#96D98D', name: 'super-light-green', aliases: [] },
      { color: '#73BF69', name: 'light-green', aliases: [] },
      { color: '#56A64B', name: 'green', aliases: [], primary: true },
      { color: '#37872D', name: 'semi-dark-green', aliases: [] },
      { color: '#19730E', name: 'dark-green', aliases: [] },
    ],
  },
  {
    name: 'blue',
    shades: [
      { color: '#8AB8FF', name: 'super-light-blue', aliases: [] },
      { color: '#5794F2', name: 'light-blue', aliases: [] },
      { color: '#3274D9', name: 'blue', aliases: [], primary: true },
      { color: '#1F60C4', name: 'semi-dark-blue', aliases: [] },
      { color: '#1250B0', name: 'dark-blue', aliases: [] },
    ],
  },
  {
    name: 'purple',
    shades: [
      { color: '#CA95E5', name: 'super-light-purple', aliases: [] },
      { color: '#B877D9', name: 'light-purple', aliases: [] },
      { color: '#A352CC', name: 'purple', aliases: [], primary: true },
      { color: '#8F3BB8', name: 'semi-dark-purple', aliases: [] },
      { color: '#7C2EA3', name: 'dark-purple', aliases: [] },
    ],
  },
]
  .map((cg) => cg.shades)
  .forEach((s) => {
    s.forEach((c) => {
      colors[c.name] = c.color;
    });
  });

export const normalizeColor = (color?: string): string => {
  return color ? colors[color] || color : '';
};
