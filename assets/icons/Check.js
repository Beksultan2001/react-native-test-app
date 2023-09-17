import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const SvgComponent = ({color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={26}
    fill="red"
  >
    <G fill={color} opacity={0.4}>
      <Path d="M17.866 10.866a.812.812 0 1 0-1.149-1.149l-4.842 4.842-1.592-1.592a.813.813 0 0 0-1.15 1.15l2.168 2.166a.812.812 0 0 0 1.149 0l5.416-5.417Z" fill={color} />
      <Path
        fillRule="evenodd"
        d="M13.5 1.354C7.068 1.354 1.854 6.568 1.854 13S7.068 24.646 13.5 24.646 25.146 19.432 25.146 13 19.932 1.354 13.5 1.354ZM3.48 13c0-5.534 4.486-10.02 10.02-10.02S23.52 7.465 23.52 13 19.035 23.02 13.5 23.02 3.48 18.535 3.48 13Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
)
export default SvgComponent
