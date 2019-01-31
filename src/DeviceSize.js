
const size = {
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xsMin: '576px',
  smMin: '768px',
  mdMin: '992px',
  xl: '1200px'
}

export const DeviceSize = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xsMin: `(min-width: ${size.xsMin})`,
  smMin: `(min-width: ${size.smMin})`,
  mdMin: `(min-width: ${size.mdMin})`,
  xl: `(min-width: ${size.xl})`
}
