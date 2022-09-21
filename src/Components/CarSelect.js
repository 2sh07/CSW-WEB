import React from 'react'
import './carlist.css';

const CarSelect = () => {
  return (
    <section id="selectmodel">
      <div className='carselect'>
    <div class="container my-5">
      <div class="row">

        <div class="col-md-12 d-flex mob">
          <h5 class="brand-btn-dd px-4 d-flex align-items-center justify-content-center" id="selectedcarmodel"> Select Your Brand</h5>
          <div class="brand-dropdown w-70pc">
            <input type="text" placeholder="    Select your car here..." id="myInput" onkeyup="filterFunction()"
              onmousedown="myFunction()" class="w-100pc /px-4 w-100pc" />

            <div id="myDropdown" class="brand-dropdown-content  w-100pc ">
              <div id="carbrands" class="car-brands">
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="1"><img
                    src="https://carservicewale.in/assets/images/Maruti_Suzuki_logo.jpg" alt="Maruti Suzuki logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Maruti Suzuki</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="2"><img
                    src="https://carservicewale.in/assets/images/Mahindra_logo.jpg" alt="Mahindra  logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Mahindra </div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="3"><img
                    src="https://carservicewale.in/assets/images/Audi_logo.jpg" alt="Audi logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Audi</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="4"><img
                    src="https://carservicewale.in/assets/images/BMW_logo.jpg" alt="BMW logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">BMW</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="5"><img
                    src="https://carservicewale.in/assets/images/Fiat_logo.jpg" alt="Fiat logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Fiat</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="6"><img
                    src="https://carservicewale.in/assets/images/Jaguar_logo.jpg" alt="Jaguar logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Jaguar</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="7"><img
                    src="https://carservicewale.in/assets/images/Aston_Martin_logo.jpg" alt="Aston Martin logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Aston Martin</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="8"><img
                    src="https://carservicewale.in/assets/images/Bentley_logo.jpg" alt="Bentley logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Bentley</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="9"><img
                    src="https://carservicewale.in/assets/images/Chevrolat_logo.jpg" alt="Chevrolat logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Chevrolat</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="10"><img
                    src="https://carservicewale.in/assets/images/Daewoo_logo.jpg" alt="Daewoo logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Daewoo</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="11"><img
                    src="https://carservicewale.in/assets/images/Datsun_logo.jpg" alt="Datsun logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Datsun</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="12"><img
                    src="https://carservicewale.in/assets/images/DC_Design_logo.jpg" alt="DC Design logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">DC Design</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="13"><img
                    src="https://carservicewale.in/assets/images/Ferrari_logo.jpg" alt="Ferrari logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Ferrari</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="14"><img
                    src="https://carservicewale.in/assets/images/Foece_logo.jpg" alt="Force logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Force</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="15"><img
                    src="https://carservicewale.in/assets/images/Ford_logo.jpg" alt="Ford logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Ford</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="16"><img
                    src="https://carservicewale.in/assets/images/Foton_logo.jpg" alt="Foton logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Foton</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="17"><img
                    src="https://carservicewale.in/assets/images/HM_logo.jpg" alt="HM logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">HM</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="18"><img
                    src="https://carservicewale.in/assets/images/Honda_logo.jpg" alt="Honda logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Honda</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="19"><img
                    src="https://carservicewale.in/assets/images/Hyundai_logo.jpg" alt="Hyundai logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Hyundai</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="20"><img
                    src="https://carservicewale.in/assets/images/Isuzu_logo.jpg" alt="Isuzu logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Isuzu</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="21"><img
                    src="https://carservicewale.in/assets/images/Jeep_logo.jpg" alt="Jeep logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Jeep</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="22"><img
                    src="https://carservicewale.in/assets/images/KIA_logo.jpg" alt="KIA logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">KIA</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="23"><img
                    src="https://carservicewale.in/assets/images/Lamborghini_logo.jpg" alt="Lamborghini logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Lamborghini</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="24"><img
                    src="https://carservicewale.in/assets/images/Land_Rover_logo.jpg" alt="Land Rover logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Land Rover</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="25"><img
                    src="https://carservicewale.in/assets/images/Maserati_logo.jpg" alt="Maserati logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Maserati</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="26"><img
                    src="https://carservicewale.in/assets/images/Mercedes_Benz_logo.jpg" alt="Mercedes Benz logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Mercedes Benz</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="27"><img
                    src="https://carservicewale.in/assets/images/MG_logo.jpg" alt="MG logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">MG</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="28"><img
                    src="https://carservicewale.in/assets/images/MINI_logo.jpg" alt="Mini logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Mini</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="29"><img
                    src="https://carservicewale.in/assets/images/Mitsubishi_logo.jpg" alt="Mitsubishi logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Mitsubishi</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="30"><img
                    src="https://carservicewale.in/assets/images/Nissan_logo.jpg" alt="Nissan logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Nissan</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="31"><img
                    src="https://carservicewale.in/assets/images/Opel_logo.jpg" alt="Opel logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Opel</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="32"><img
                    src="https://carservicewale.in/assets/images/Porsche_logo.jpg" alt="Porsche logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Porsche</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="33"><img
                    src="https://carservicewale.in/assets/images/Renault_logo.jpg" alt="Renault logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Renault</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="34"><img
                    src="https://carservicewale.in/assets/images/Rolls_Royce_logo.jpg" alt="Rolls Royce logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Rolls Royce</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="35"><img
                    src="https://carservicewale.in/assets/images/Skoda_logo.jpg" alt="Skoda logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Skoda</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="36"><img
                    src="https://carservicewale.in/assets/images/SsangYong_logo.jpg" alt="SsangYong logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">SsangYong</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="37"><img
                    src="https://carservicewale.in/assets/images/Tata_logo.jpg" alt="Tata logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Tata</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="38"><img
                    src="https://carservicewale.in/assets/images/Toyota_logo.jpg" alt="Toyota logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Toyota</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="39"><img
                    src="https://carservicewale.in/assets/images/Volkswagen_logo.jpg" alt="Volkswagen logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Volkswagen</div>
                </div>
                                <div class="branditemdiv" onclick="showmodels(this);" data-brand="40"><img
                    src="https://carservicewale.in/assets/images/Volvo_logo.jpg" alt="Volvo logo image"
                    class="w-100pc branditem" />
                  <div class="brandname">Volvo</div>
                </div>
                              </div>
            
          </div>

        </div>


      </div>
    </div>
    </div>
    </div>
  </section>
  )
}

export default CarSelect