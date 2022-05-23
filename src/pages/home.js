import React from "react";
import { Link } from "react-router-dom";
import EventsAndUpsCard from "../comps/EventsAndUpsCard";
import Navbar from "../comps/Navbar";
import StoryOfTheDay from "../comps/StoryOfTheDay";
import img from "./assets/unsplash_uO1MUMn0Xzc.png";
import "./sah.css";
const Home = (props) => {
  return (
    <>
      <link rel="stylesheet" href="sah.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Poppins"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      />
      <title>sahayata</title>
      <Navbar />
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-sm-6" id="textt">
              <span id="sm">#Money at your doorstep</span>
              <span id="sm1">
                सहायता - एक कदम नारी सशक्तिकरण की ओर <br />{" "}
              </span>
              <span id="sm2">
                A solution to digitize the SHG operations with its unique
                disruptive transactions management system.
              </span>
              <a href="" className="butt1" id="butt1">
                Join now
              </a>
            </div>
            <div className="col-sm-6" id="imgg">
              <img
                height={"100px"}
                width={"100px"}
                src={img}
                alt="pic"
                id="pict"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus">
        <div className="abt1">
          <span className="abt2">About sahayata</span>
          <span className="abt3">
            Sahayata is a digital payment solution that intends to digitize the
            SHG payment operations with its unique disruptive offline payment
            solution. It believes there is a huge opportunity to digitize the
            transactions of cash-based operations of SHGs in India with its
            solution that is immune to challenges of mismanagement because of
            lack of proper maintanence of records and history.
            <br />
            The implementation of sahataya can also help people connect to the
            SHGs in their as well as nearby areas also. This also brought
            transparency and traceability in the system by adding the
            authentication features as well.
          </span>
          <StoryOfTheDay/>
        </div>
      </section>
      <section className="events">
        <div className="v60_322">
          <div className="v60_323" />
          <span className="v60_324">Events and updates</span>
          <EventsAndUpsCard/>
          <div className="v60_370">
            <div className="v60_371" />
            <span className="v60_372">
              New self help groups were created in the district of Thar in
              Rajasthan.
            </span>
            <div className="v60_373" />
            <span className="v60_374">Read more</span>
            <div className="v60_375">
              <div className="v60_376" />
              <div className="v60_377">
                <div className="v60_378" />
              </div>
            </div>
          </div>
          <div className="v60_361">
            <div className="v60_362" />
            <span className="v60_363">
              New self help groups were created in the district of Thar in
              Rajasthan.
            </span>
            <div className="v60_364" />
            <span className="v60_365">Read more</span>
            <div className="v60_366">
              <div className="v60_367" />
              <div className="v60_368">
                <div className="v60_369" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whyus">
        <div className="v60_141">
          <div className="v60_142" />
          <span className="v60_143">Why sahayata ?</span>
          <div className="name" />
          <div className="name" />
          <div className="v60_146">
            <span className="v60_147">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              elit, vel quis.
            </span>
            <span className="v60_148">86%</span>
          </div>
          <div className="v60_385">
            <span className="v60_386">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              elit, vel quis.
            </span>
            <span className="v60_387">86%</span>
          </div>
          <div className="v60_382">
            <span className="v60_383">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              elit, vel quis.
            </span>
            <span className="v60_384">86%</span>
          </div>
          <div className="v60_379">
            <span className="v60_380">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              elit, vel quis.
            </span>
            <span className="v60_381">86%</span>
          </div>
        </div>
      </section>
      <section className="awareness">
        <div className="v60_388">
          <div className="v60_389" />
          <span className="v60_390">Awareness about Self help groups</span>
          <span className="v60_391">View More</span>
          <div className="v60_392">
            <div className="v60_393" />
            <div className="v60_395" />
            <div className="v60_396" />
            <span className="v60_397">REC</span>
            <div className="v60_398" />
            <span className="v60_399">30 min</span>
            <div className="v60_400" />
            <span className="v60_401">Ipsum Lorem</span>
            <span className="v60_402">
              Lorem ipsum dolor sit amet, onsecte adipiscing elit.
            </span>
            <span className="v60_403">Self help group</span>
            <div className="name" />
          </div>
          <div className="v70_671">
            <div className="v70_672" />
            <div className="v70_673" />
            <div className="v70_674" />
            <span className="v70_675">REC</span>
            <div className="v70_676" />
            <span className="v70_677">30 min</span>
            <div className="v70_678" />
            <span className="v70_679">Ipsum Lorem</span>
            <span className="v70_680">
              Lorem ipsum dolor sit amet, onsecte adipiscing elit.
            </span>
            <span className="v70_681">Self help group</span>
            <div className="name" />
          </div>
          <div className="v70_689">
            <div className="v70_690" />
            <div className="v70_691" />
            <div className="v70_692" />
            <span className="v70_693">REC</span>
            <div className="v70_694" />
            <span className="v70_695">30 min</span>
            <div className="v70_696" />
            <span className="v70_697">Ipsum Lorem</span>
            <span className="v70_698">
              Lorem ipsum dolor sit amet, onsecte adipiscing elit.
            </span>
            <span className="v70_699">Self help group</span>
            <div className="name" />
          </div>
        </div>
      </section>
      <section className="contactus">
        <div className="v60_491">
          <div className="v60_493">Have Questions? Connect With Us</div>
          <div className="cunt">
            <form action="action_page.php">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <label htmlFor="subject">Subject</label>
              
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: 200 }}
                defaultValue={""}
              />
              <input type="submit" defaultValue="Submit" />
            </form>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="v66_514">
          <div className="v66_515" />
          <span className="v66_516">Navigation</span>
          <span className="v66_517">
            Copywright © 2022, sahayata. Read our Privacy Policy
          </span>
          <span className="v66_518">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            <span style={{ color: "#06B58C" }}>abc_sahayata@gmail.com</span>
          </span>
          <span className="v66_519">Self-help groups</span>
          <span className="v66_520">Home</span>
          <span className="v66_521">Events</span>
          <span className="v66_522">sahayata</span>
          <span className="v66_523">Conditions</span>
          <span className="v66_524">Contact us</span>
          <span className="v66_525">About</span>
          <span className="v66_526">Privacy Policy</span>
          <div className="name" />
        </div>
      </section>
    </>
  );
};

// home.propTypes = {}

export default Home;
