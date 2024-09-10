// import { createContext, useState } from 'react'
// import AnimatedCursor from "react-animated-cursor"

// export const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//     const cursor = (
//      <AnimatedCursor
//      color='255,255,255'
//      innerSize={8}
//      outerSize={35}
//      innerScale={1}
//      outerScale={2}
//      outerAlpha={0.8}
//      hasBlendMode={true}
//      outerStyle={{
//        mixBlendMode: 'exclusion'
//      }}
//      innerStyle={{
//       backgroundColor: 'var(--cursor-color)',
//       mixBlendMode: 'exclusion'
//     }}
//      clickables={[
//        'a',
//        'input[type="text"]',
//        'input[type="email"]',
//        'input[type="number"]',
//        'input[type="submit"]',
//        'input[type="image"]',
//        'label[for]',
//        'select',
//        'textarea',
//        'button',
//        '.link',
//        {
//          target: '.btn',
//          options: {
//            innerSize: 0,
//            outerSize: 0,
//            color: '255, 255, 255',
//            outerAlpha: 0,
//            innerScale: 0,
//            outerScale: 0,
//          }
//        }
//      ]}
//     />
//     )
    
//     return (
//         <DataContext.Provider value={cursor}>
//                {children}
//         </DataContext.Provider>
//     )
// };