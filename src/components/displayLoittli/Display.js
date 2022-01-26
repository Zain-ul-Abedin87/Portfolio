import React, { Component, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../../elements/loadings/Loadings";
// import groovyWalkAnimation from "../../assest/lottie/landingPerson.json";
export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
   

    return (
      <Suspense fallback={<Loading />}>
        <Lottie animationData={animationData} loop={true} autoplay={true} />
      </Suspense>
    );
  }
}
