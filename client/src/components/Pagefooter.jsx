import React from "react";
import "../styles/PageFooter.css";
function Pagefooter() {
  return (
    <div>
      <div className="footer-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55.807"
          height="60.409"
          viewBox="0 0 55.807 60.409"
        >
          <g
            id="Group_1976"
            data-name="Group 1976"
            transform="translate(-602.96 -54.649)"
          >
            <g
              id="Group_991"
              data-name="Group 991"
              transform="translate(604.373 56.062)"
            >
              <g id="Group_990" data-name="Group 990">
                <path
                  id="Path_2680"
                  data-name="Path 2680"
                  d="M632.187,114.73c2.414-.839,13.753-4.6,20.269-14.094,7.493-10.916,5.931-14.049,5.931-43.383-3.844,0-14.528-.023-26.2-.023s-22.754.023-26.476.023c0,29.3-1.718,32.467,5.775,43.383,6.515,9.492,18.285,13.254,20.7,14.094"
                  transform="translate(-605.541 -57.231)"
                  fill="#a08459"
                />
              </g>
            </g>
            <g
              id="Group_993"
              data-name="Group 993"
              transform="translate(602.96 54.649)"
            >
              <g id="Group_992" data-name="Group 992">
                <path
                  id="Path_2681"
                  data-name="Path 2681"
                  d="M631.019,115.058l-.759-.263c-9.664-3.315-16.766-8.2-21.107-14.528-6.4-9.317-6.344-13.422-6.127-30.7.049-3.847.1-8.207.1-13.482V54.672l8-.007c5.21-.007,12.43-.016,19.892-.016,7.416,0,14.434.009,19.551.016l8.062.007v1.413c0,4.9.044,9.076.082,12.673.187,17.819.232,22.053-6.261,31.509-3.028,4.411-9.095,10.52-20.8,14.571ZM605.955,57.5c-.008,4.666-.058,8.6-.1,12.1-.213,16.958-.258,20.487,5.631,29.065,3.967,5.779,10.538,10.286,19.533,13.4,10.79-3.8,16.343-9.373,19.106-13.4,5.985-8.72,5.952-11.95,5.764-29.879-.034-3.256-.073-6.98-.08-11.291l-5.239-.005c-5.117-.007-12.133-.016-19.549-.016-7.461,0-14.679.009-19.889.016Z"
                  transform="translate(-602.96 -54.649)"
                  fill="#515150"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="links">
        <span>© 2020 Agorim. Tous droits réservés.</span>
        <div className="contact">
          <i className="fas fa-phone-alt">
           
            <span>+32485004002</span>
          </i>
          <div className="div-line"></div>
          <div className="fti">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagefooter;
