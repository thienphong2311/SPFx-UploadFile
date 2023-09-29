import * as React from 'react';
import styles from './SpFxUploadFile.module.scss';
import { ISpFxUploadFileProps } from './ISpFxUploadFileProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SpFxUploadFile extends React.Component<ISpFxUploadFileProps, {}> {
  public render(): React.ReactElement<ISpFxUploadFileProps> {
    return(
      <div className="container" >
        <div className={`row ${styles.rowStyle}`}>
            <div className={`col ${styles.UploadInput}`}>
              <label htmlFor="myFile">Drag and drop file here or &nbsp; &nbsp;
              </label>
              <input type="file" id="myFile" name="filename"/>
            </div>
        </div>
        <div className={`row ${styles.rowStyle}`}>
            <div className="col-8">
                <label>Name of <span>Owner</span> for this file</label>
                <input type="text" className="form-control"/>
            </div>
        </div>
        <div className={`row ${styles.rowStyle}`}>
          <label>What <span>type of document</span> is beinng share?</label>
            <div className="col">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault1">
                    Proposal Document
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault2">
                    Governance Document
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault3">
                    T&T Summary
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault4">
                    SOAP
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault5">
                    Statement of Work (SOW)
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault6">
                    ITTP
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault7">
                    Case Study
                  </label>
                </div>
            </div>
            <div className="col">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8"/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault8">
                    Volumetric
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault9">
                    Capability Presentation
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault10">
                    Client Presentation
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault11" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault11">
                    Client Presentation
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault12">
                    FAQ response
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault13" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault13">
                    Proposal Template
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault14" checked/>
                  <label className={`form-check-label ${styles.docType}`} htmlFor="flexRadioDefault14">
                    Others
                  </label>
                </div>
            </div>
        </div>
        <div className={`row ${styles.rowStyle}`}>
            <div className="col-8 ">
                <label>Which <span>region</span> is this file from, or related to</label>
                <select className="form-select" aria-label="Default select example" id='region'>
                  <option selected>Select region</option>
                  <option value="1">AMS-AD and Manufacturing</option>
                  <option value="2">AMS-Canada Public Sector</option>
                  <option value="3">AMS-Consumer Retail and Healthcare</option>
                  <option value="4">AMS-LATAM</option>
                  <option value="5">AMS-Tel ME_Tech</option>
                  <option value="6">AMS-Transportation_Energy_Auto</option>
                  <option value="7">APAC-ANZ</option>
                  <option value="8">APAC-ASEAN</option>
                  <option value="9">APAC-GC</option>
                  <option value="10">APAC-India</option>
                  <option value="11">APAC-Japan</option>
                  <option value="12">APAC-MEA</option>
                  <option value="13">EMEA-BCM and UKI Commercial</option>
                  <option value="14">AEMEA-Beneluce</option>
                  <option value="15">EMEA-CNEE</option>
                  <option value="16">EMEA-Iberia</option>
                  <option value="16">EMEA-ISB</option>
                  <option value="16">EMEA-Italy</option>
                  <option value="16">EMEA-LMA</option>
                  <option value="16">EMEA-UKI Public Sector and Defence</option>
                </select>
            </div>
        </div>
        <div className={`row ${styles.rowStyle}`}>
            <div className="col-8">
                <label>If applicable, what <span>industry</span> is this file related to</label>
                <select className="form-select" aria-label="Default select example" id="industry">
                  <option selected>Select industry</option>
                  <option value="1">Travel and Transportation</option>
                  <option value="2">Technology, Media and Telecommunication</option>
                  <option value="3">Public Sector</option>
                  <option value="4">Manufacturing</option>
                  <option value="5">Life Sciences</option>
                  <option value="6">Insurance</option>
                  <option value="7">Healthcare</option>
                  <option value="8">Energy, Utilities, Oil and Gas</option>
                  <option value="9">Automative</option>
                  <option value="10">Aerospace and Defense</option>
                  <option value="11">Consumer Retail</option>
                  <option value="12">Banking and Capital Markets</option>
                  <option value="13">Others</option>
                </select>
            </div>
        </div>
        <div className={`row ${styles.rowStyle}`}>
            <div className="col-8">
                <label>Document Code</label>
                <input type="text" className="form-control"/>
            </div>
        </div>
        <div className={`row ${styles.rowStyle}`}>
          <label>What content is this file related to</label>
          <div className={`col-8 form-check ${styles.check_Box}`}>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className={`form-check-label ${styles.docType}`} htmlFor="flexCheckDefault">
              Corporate and Generic Content
            </label>
          </div>
        </div>
        <div className={`row ${styles.rowStyle}`}>
          <div className="col">
            <label>&nbsp;</label>
            <button type="button" className={`btn ${styles.btnSubmit} `}>Submit</button>
          </div>
        </div>
    </div>
    ) ;
  }
}
