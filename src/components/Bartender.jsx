// import { FaTimes } from "react-icons/fa";
// import { render } from "react-dom";
// import ChangeStatusDetail from "./components/ChangeStatusDetail";
// import { useEffect, useState } from "react";
import NewDoingState from "./NewDoingState";

const Bartender = (props) => {
  // console.log(props);
  if (!props) {
    return null;
  }

  return (
    <div className={"bartender"}>
      <h3>Name: {props.bartender.name} </h3>
      <p>Status: {props.bartender.status} </p>
      <p>
        Doing: <NewDoingState statusDetail={props.bartender.statusDetail} />
      </p>
      <p>Using Tap: {props.bartender.usingTap + 1} </p>
      <p>Serving Nr: {props.bartender.servingCustomer} </p>
    </div>
  );
};

export default Bartender;

/* {
        function Currentlydoing({ text, status }) {
          return (
            <>
            {
              {
                pourBeer: <PourBeer text={text} />,
                reserveTap: <ReserveTap text={text} />,
                replaceKeg: <ReplaceKeg text={text} />,
                releaseTap: <ReleaseTap text={text} />,
                receivePayment: <ReceivePayment text={text} />,
                startServing: <StartServing text={text} />,
                waiting: <Waiting text={text} />,
              }[status]
            }
            </>
            );
          }}  */

// ternary operator

/* currentDoingState(text, status) 
    
    return 'pourBeer' ? 'Pouring Beer' :  */
/* // 'reserveTap' ? 'Reserving a Tap' : 
    //  'replaceKeg' ? 'Replacing a Keg':
    //  'releaseTap' ? 'Releasing a Tap':
    //  'receivePayment' ? 'Receiving Payment':
    //  'startServing' ? 'Starting to Serve':
    //  'waiting' ? 'Waiting for Work':
    //  'NO DETAILS'
   </>
   }; */

// const CURRENTLYDOING_STATES = text => ({
//   pourBeer: 'Pouring Beer',
//   reserveTap: 'Reserving a Tap',
//   replaceKeg: 'Replacing a Keg',
//   releaseTap: 'Releasing a Tap',
//   receivePayment: 'Receiving Payment',
//   startServing: 'Starting to Serve',
//   waiting: 'Waiting for Work',
// });

// function Currentlydoing({ text, status }) {
//   return (
//     <>
//       {
//         {
//           pourBeer: <PourBeer text={text} />,
//           reserveTap: <ReserveTap text={text} />,
//           replaceKeg: <ReplaceKeg text={text} />,
//           releaseTap: <ReleaseTap text={text} />,
//           receivePayment: <ReceivePayment text={text} />,
//           startServing: <StartServing text={text} />,
//           waiting: <Waiting text={text} />,
//         }[status]
//       }
//     </>
//   );
// }
// class changeStatusDetail extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pourBeer: "Pouring Beer",
//       reserveTap: "Reserving a Tap",
//       replaceKeg: "Replacing a Keg",
//       releaseTap: "Releasing a Tap",
//       receivePayment: "Receiving Payment",
//       startServing: "Starting to Serve",
//       waiting: "Waiting for Work",
//     };
//   }
// }
// const [doingStatus, setDoingStatus] = useState({
//   doingStatus: "",
//   pouring: {doingStatus:"Pouring Beer"},
//   reserving: {doingStatus:"Reserving a Tap"},
//   replacing: "Replacing a Keg",
//   releasing: "Releasing a Tap",
//   receiving: "Receiving Payment",
//   startingServe: "Starting to Serve",
//   wait: "Waiting for Work",
// });

// useEffect(() => {
//   if (currentDoingState === "pourBeer") {
//     setDoingStatus(pouring);
//     return;
//   }
//   if (currentDoingState === "reserveTap") {
//     setDoingStatus(reserving);
//     return;
//   }
//   if (currentDoingState === "replaceKeg") {
//     setDoingStatus(replacing);
//     return;
//   }
//   if (currentDoingState === "releaseTap") {
//     setDoingStatus(releasing);
//     return;
//   }
//   if (currentDoingState === "receivePayment") {
//     setDoingStatus(receiving);
//     return;
//   }
//   if (currentDoingState === "startServing") {
//     setDoingStatus(startingServe);
//     return;
//   }
//   if (currentDoingState === "waiting") {
//     setDoingStatus(wait);
//     return;
//   } else {
//     setDoingStatus(currentDoingState);
//   }
// }, []);

// renderDoingState((currentDoingState) => {
//   switch(currentDoingState) {
//     case 'pourBeer':
//       return doingStates.pouring;
//     case 'reserveTap':
//       return doingStates.reserving;
//     case 'replaceKeg':
//       return doingStates.replacing;
//     case 'releaseTap':
//       return doingStates.releasing;
//     default:
//       return currentDoingState;
//   })
// }

// const [doingState, setDoingStatus] = useState({
//   doingStatus: "",
// });

// reducer((currentDoingState) => {
//   switch ((doingState, currentDoingState)) {
//     case currentDoingState === doingStates.pouring:
//       return () => setDoingStatus((doingStatus = doingStates.pouring));
//     case currentDoingState === doingStates.reserving:
//       return () => setDoingStatus((doingStatus = doingStates.reserving));
//     case currentDoingState === doingStates.replacing:
//       return () => setDoingStatus((doingStatus = doingStates.replacing));
//     case currentDoingState === doingStates.releasing:
//       return () => setDoingStatus((doingStatus = doingStates.releasing));
//     default:
//       return () => setDoingStatus((doingStatus = currentDoingState));
//   }
// });
