// import React, {Component, PropTypes} from 'react';
//
//
//
//
// function getStyles(props, context) {
//   const {
//     circle,
//     rounded,
//     transitionEnabled,
//     zDepth,
//   } = props;
//
//   const {
//     baseTheme,
//     paper,
//   } = context.muiTheme;
//
//   return {
//     root: {
//       color: paper.color,
//       backgroundColor: paper.backgroundColor,
//       transition: transitionEnabled && transitions.easeOut(),
//       boxSizing: 'border-box',
//       fontFamily: baseTheme.fontFamily,
//       WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
//       boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
//       borderRadius: circle ? '50%' : rounded ? '2px' : '0px',
//     }
//   }
// }
//
//
// class Paper extends Component{
//   static propTypes = {
//     /**
//      * Children passed into the paper element.
//      */
//     children: PropTypes.node,
//     /**
//      * Set to true to generate a circlular paper container.
//      */
//     circle: PropTypes.bool,
//     /**
//      * By default, the paper container will have a border radius.
//      * Set this to false to generate a container with sharp corners.
//      */
//     rounded: PropTypes.bool,
//     /**
//      * Override the inline-styles of the root element.
//      */
//     style: PropTypes.object,
//     /**
//      * Set to false to disable CSS transitions for the paper element.
//      */
//     transitionEnabled: PropTypes.bool,
//     /**
//      * This number represents the zDepth of the paper shadow.
//      */
//     // zDepth: propTypes.zDepth,
//   };
// }
//
//
// export default Paper;
