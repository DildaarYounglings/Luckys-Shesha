import React, { useRef } from 'react';
import { TopNav } from './TopNav';
import { NavLink } from 'react-router-dom';
import './Home.css'


export const Home = () => {
  const recipeElRef = useRef();
  const pancakeIngredientsEl = useRef();
  return (
  <section>
      <TopNav />
        <div className='home_header1'>

          <div className='home_header_left' style={{marginRight:"auto"}}>
            <h1>Life is uncertain. Eat  first</h1>
            <p className="homeHeaderLeft_p3"> “ A recipe has no soul.<br />You as the cook must bring soul to the recipe”<br /><b>-Thomas Keller</b> </p>


            <img src="images/swirlyArrow.png" style={{ position: "relative", left: "10%", top: "-50px" }}></img><br />
            <button className="homeHeaderLeft_Button" onClick={function () { recipeElRef.current.click() }}>Explore Recipes <NavLink ref={recipeElRef} to="/recipes" hidden /></button>
          </div>

          <div className='home_header_right' >
            <img src={`images/homeHeaderRight.png`} style={{position:"relative", height: "100%", width: "40rem", }} alt='' />
          </div>

        </div>

        <div className='home_header2'>

          <div className='home_header_right'>
            <img src={`images/homeHeader2.png`} style={{ position: "relative", left: "0%", height: "80%", width: "100%", top:"-140px", }} alt='' />
          </div>

          <div className='home_header_left'>
            <h1 style={{ position: "relative", left: "0%", top:"-140px", }}>Create your own Recipe</h1>
            <h3 className="homeHeaderLeft_H3" style={{ position: "relative", left: "18%", top: "-90px", }}>
              Using the ingredients you have we can help you<br/> make a meal<br /><br />Porem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Nunc vulputate libero et velit<br/> interdum, ac aliquet odio mattis.
            </h3>
          </div>
        </div>

        <div style={{ marginTop:"20vh",width: "fit-content" }}>
          <h1 style={{ position: "relative", marginBottom:"5rem",marginLeft:"2rem"}}>Trending recipes for the month</h1>

          <div className="home_footer">
            <div className="homeFooter_div1">
              <div style={{ position: "relative" }} >
                <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", right: "0" }}><img src={`images/bookmarkFeature.png`} alt='' /></button>
                <img src={`images/pancake.png`} alt='' />
                <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "0", bottom: "0" }} onClick={function () { pancakeIngredientsEl.current.click(); }}><img src={`images/ViewIngredientsButton.png`} alt='' /><NavLink ref={pancakeIngredientsEl} to="/recipesMethods/Pancakes" hidden /></button>
              </div>
              <div>
                <h2 className="homeHeaderLeft_h2">Pancake</h2>
                <div><img src={`images/gordonRamsy.png`} alt='' /><h4>Gordon Ramsay</h4></div>
              </div>
            </div>
            <div className="homeFooter_div2">
              <div style={{ position: "relative" }} >
                <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", right: "10px",zIndex:"1"}}><img src={`images/bookmarkFeature.png`} alt='' /></button>
                <img src={`images/friedChickenAndRice.png`} alt='' />
                <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "0", bottom: "0" }} onClick={function () { pancakeIngredientsEl.current.click(); }}><img src={`images/ViewIngredientsButton.png`} alt='' /><NavLink ref={pancakeIngredientsEl} to="/recipesMethods/Pancakes" hidden /></button>
              </div>
              <div>
                <h2 className="homeHeaderLeft_h2">Fried Chicken & Rice</h2>
                <div><img src={`images/pierreGagnaire.png`} alt='' /><h4>Pierre Gagnaire</h4></div>
              </div>
            </div>

            <div className="homeFooter_div3">
              <div style={{ position: "relative"}} >
                <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", right: "0" }}><img src={`images/bookmarkFeature.png`} alt='' /></button>
                <img src={`images/burger.png`} alt='' />
                <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "0", bottom: "0" }} onClick={function () { pancakeIngredientsEl.current.click(); }}><img src={`images/ViewIngredientsButton.png`} alt='' /><NavLink ref={pancakeIngredientsEl} to="/recipesMethods/Pancakes" hidden /></button>
              </div>
              <div>
                <h2 className="homeHeaderLeft_h2">Burger & Fries</h2>
                <div><img src={`images/gordonRamsy.png`} alt='' /><h4>Gordon Ramsay</h4></div>
              </div>
            </div>
          </div>
        </div>
    </section>)
}
/*<div style={{ marginTop:"20vh",width: "fit-content" }}>

<h1 style={{ position: "relative", marginBottom:"5rem",marginLeft:"2rem"}}>Trending recipes for the month</h1>

<div className="home_footer">
  <div className="homeFooter_div1">
    <div style={{ position: "relative" }} >
      <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", right: "0" }}><img src={`images/bookmarkFeature.png`} alt='' /></button>
      <img src={`images/pancake.png`} alt='' />
      <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "0", bottom: "0" }} onClick={function () { pancakeIngredientsEl.current.click(); }}><img src={`images/ViewIngredientsButton.png`} alt='' /><NavLink ref={pancakeIngredientsEl} to="/recipesMethods/Pancakes" hidden /></button>
    </div>
    <div>
      <h2 className="homeHeaderLeft_h2">Pancake</h2>
      <div><img src={`images/gordonRamsy.png`} alt='' /><h4>Gordon Ramsay</h4></div>
    </div>
  </div>

  <div className="homeFooter_div3" ></div>
    <div style={{ position: "relative" }} >
      <button style={{ position: "absolute", backgroundColor: "green", right: "0" }}><img src={`images/bookmarkFeature.png`} alt='' /></button>
      <button style={{ position: "absolute", backgroundColor: "green", left: "0", bottom: "0" }}><img src={`images/ViewIngredientsButton.png`} alt='' /></button>
    </div>
    <div>
      <h2 className="homeHeaderLeft_h2">Burger & Fries</h2>
      <div><img src={`images/pierreGagnaire.png`} alt='' /><h4>Pierre Gagnaire</h4></div></div>
    </div>
  </div>
  <div className="homeFooter_div2"></div>
    <div style={{ position: "relative" }} >
      <button style={{ position: "absolute", backgroundColor: "green", right: "0" }}><img src={`images/bookmarkFeature.png`} alt='' /></button>
      
      <button style={{ position: "absolute", backgroundColor: "green", left: "0", bottom: "0" }}><img src={`images/ViewIngredientsButton.png`} alt='' /></button>
    </div>
    <div>
      <h2 className="homeHeaderLeft_h2"></h2>
    </div>*/