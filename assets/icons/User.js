import * as React from "react"
import Svg, { G, Circle, Ellipse } from "react-native-svg"
const SvgComponent = ({color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={26}
    fill="none"
  >
    <G stroke={color} strokeWidth={1.5} opacity={0.4}>
      <Circle cx={13.5} cy={6.5} r={4.333} />
      <Ellipse cx={13.5} cy={18.417} rx={7.583} ry={4.333} />
    </G>
  </Svg>
)
export default SvgComponent
