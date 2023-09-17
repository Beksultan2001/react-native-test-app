import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M9.583 2.292a7.292 7.292 0 1 0 0 14.583 7.292 7.292 0 0 0 0-14.583ZM1.042 9.583a8.542 8.542 0 1 1 15.007 5.582l2.726 2.726a.625.625 0 0 1-.884.884l-2.726-2.726A8.542 8.542 0 0 1 1.041 9.583Z"
      clipRule="evenodd"
      opacity={0.6}
    />
  </Svg>
)
export default SvgComponent
