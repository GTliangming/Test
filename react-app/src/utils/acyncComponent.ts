export const  aa =1;
// import * as React from "react";


// interface AsyncComponentState {
//     Component: any;
// }
// export default (loadComponent, placeholder = "拼命加载中") => {

//     return class AsyncComponent extends React.Component<{}, AsyncComponentState>{

//         constructor(props) {
//             super(props);
//             this.state = {
//                 Component: null
//             };
//             this.hasLoadedComponent = this.hasLoadedComponent.bind(this);
//         }
//         // unmont: boolean = false;

//         // componentWillUnmount() {
//         //     this.unmont = true;
//         // }
//         componentWillMount() {
//             if (this.hasLoadedComponent()) {
//                 return;
//             }
//             loadComponent()
//                 .then(module => module.default ? module.default : module)
//                 .then(Component => {
//                     this.setState({
//                         Component
//                     });
//                 })
//                 .catch(error => {
//                     /*eslint-disable*/
//                     console.error("cannot load Component in <AsyncComponent>");
//                     /*eslint-enable*/
//                     throw error;
//                 })
//         }
//         hasLoadedComponent = () => {
//             return this.state.Component !== null;
//         }
//         // async componentDidMount() {
//         //     console.log(111111, this.props)
//         //     const { default: Child } = await loadComponent();

//         //     if (this.unmont) { return; }

//         //     this.setState({
//         //         Child
//         //     })
//         // }

//         render() {
//             const { Component } = this.state;
//             return (Component) ? <Component { ...this.props } /> : placeholder;

//         }
//     }

// }