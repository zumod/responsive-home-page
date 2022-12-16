import React, {useState, useEffect} from 'react'
import "./LandingPage.scss"
import blueActiva from '../../assets/images/blueActiva.png';

const LandingPage = () => {

  const [form, setForm] = useState({
    name: '',
    number: '',
    city: '',
  })

  useEffect(() => {
    console.log('formLogging', form)
  }, [form]);

  useEffect(() => {
    console.log('Home mounted')
    //Cleanup function
    return () => {
      console.log('Home unmounted')
    }
  }, [])

  const submit = async () => {
    let data = {...form}
    console.log('form success', data)
    await setForm({
      name: '',
      number: '',
      city: '',
    })
    alert('Form Submitted Succesfully')
  }
  
  return (
    <>
      <section className='landing-page-sec'>
        <section className='header-sec pt-5'>
          <div className='container'>
            <div className='row mt-5'>
              <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12 my-auto'>
                <div>
                  <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
                  <h2 className='mt-3'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
                  <div className='what-we-offer mt-5'>
                    <h3>WHAT WE OFFER</h3>
                    <div class="form-check mt-2">
                      <input class="form-check-input" type="radio" name="flexRadioOffer1" id="flexRadioOffer1" />
                      <label class="form-check-label" for="flexRadioOffer1">
                        Offer 1
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input class="form-check-input" type="radio" name="flexRadioOffer2" id="flexRadioOffer2" />
                      <label class="form-check-label" for="flexRadioOffer2">
                        Offer 2
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input class="form-check-input" type="radio" name="flexRadioOffer3" id="flexRadioOffer3" />
                      <label class="form-check-label" for="flexRadioOffer3">
                        Offer 3
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input class="form-check-input" type="radio" name="flexRadioOffer4" id="flexRadioOffer4" />
                      <label class="form-check-label" for="flexRadioOffer4">
                        Offer 4
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input class="form-check-input" type="radio" name="flexRadioOffer5" id="flexRadioOffer5" />
                      <label class="form-check-label" for="flexRadioOffer5">
                        Offer 5
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-auto'>
                <div class="card pt-5 pb-5">
                  <div class="card-body">
                    <h4>Personal Details</h4>
                    <div class="did-floating-label-content mt-4">
                      <input value={form?.name} onChange={e=>setForm({...form, name: e.target.value})} class="did-floating-input" type="text" placeholder=" " />
                      <label class="did-floating-label">Name</label>
                    </div>
                    <div class="did-floating-label-content mt-4">
                      <input value={form?.number} onChange={e=>setForm({...form, number: e.target.value})} class="did-floating-input" type="text" placeholder=" " />
                      <label class="did-floating-label">Mobile number</label>
                    </div>
                    <div class="did-floating-label-content mt-4">
                      <select value={form?.city} onChange={e=>setForm({...form, city: e.target.value})} class="did-floating-select">
                        <option value=""></option>
                        <option value="Alabama">Alabama</option>
                        <option value="Boston">Boston</option>
                        <option value="Ohaio">Ohaio</option>
                        <option value="New York">New York</option>
                        <option value="Washington">Washington</option>
                      </select>
                      <label class="did-floating-label">Select city</label>
                    </div>
                    <div className='mt-5'>
                      <button onClick={submit} type='button' className='btn'>Continue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='product-details-sec'>
          <div className='container'>
            <div className='row'>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 my-auto'>
                <div>
                  <h5>Lorem Ipsum has been the industry's standard dummy text</h5>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <h5 className='mt-5'>Lorem Ipsum</h5>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                </div>
              </div>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 my-auto'>
                <div>
                  <img src={blueActiva} alt="product-image"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='product-decription-sec pt-5 pb-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12 my-auto'>
              </div>
              <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12 my-auto'>
                <div className='row'>
                  <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 my-auto'>
                    <div>
                      <h6>Lorem Ipsum has been the industry's standard dummy text</h6>
                      <p className='mt-4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                  <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 my-auto'>
                    <div className='row mt-3'>
                      <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 my-auto'>
                        <div className='d-flex mt-3'>
                          <div class="circle">1</div>
                          <div>
                            <p className='ms-2'>Lorem Ipsum</p>
                          </div>
                        </div>
                        <div className='d-flex mt-3'>
                          <div class="circle">2</div>
                          <div>
                            <p className='ms-2'>Lorem Ipsum</p>
                          </div>
                        </div>
                        <div className='d-flex mt-3'>
                          <div class="circle">3</div>
                          <div>
                            <p className='ms-2'>Lorem Ipsum</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 my-auto'>
                        <div className='d-flex mt-3'>
                          <div class="circle">4</div>
                          <div>
                            <p className='ms-2'>Lorem Ipsum</p>
                          </div>
                        </div>
                        <div className='d-flex mt-3'>
                          <div class="circle">5</div>
                          <div>
                            <p className='ms-2'>Lorem Ipsum</p>
                          </div>
                        </div>
                        <div className='d-flex mt-3'>
                          <div class="circle">6</div>
                          <div>
                            <p className='ms-2'>Lorem Ipsum</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12 my-auto'>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default LandingPage