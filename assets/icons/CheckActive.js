import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      fill="#3B3B3B"
      fillRule="evenodd"
      d="M24.333 13c0 5.983-4.85 10.833-10.833 10.833-5.983 0-10.833-4.85-10.833-10.833 0-5.983 4.85-10.833 10.833-10.833 5.983 0 10.833 4.85 10.833 10.833Zm-6.467-3.283a.813.813 0 0 1 0 1.15l-5.416 5.416a.812.812 0 0 1-1.15 0l-2.166-2.167a.813.813 0 0 1 1.149-1.149l1.592 1.592 2.421-2.42 2.421-2.422a.813.813 0 0 1 1.15 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
