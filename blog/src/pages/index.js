import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import Video from "../components/Video"
import Seo from "../components/Seo"
import MergeTypeIcon from '@mui/icons-material/MergeType';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import SocialDistanceOutlinedIcon from '@mui/icons-material/SocialDistanceOutlined';
import {
  box,
  container,
  featureInfo,
  sponsorsJumbotron
} from "../css/index.module.css"
import {
  blogauthor,
  bloglisting,
  blogpost,
  blogtitle,
  blogteaser,
  blogauthorinfo
} from "../css/blogpost.module.css";
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Box } from "@mui/material";

function formatDate(inputString) {
  const parts = inputString.split("/");
  const datePart = parts[parts.length - 2];
  const dateComponents = datePart.split("-");
  const year = parseInt(dateComponents[0]);
  const month = parseInt(dateComponents[1]);
  const day = parseInt(dateComponents[2]);
  const formattedDate = new Date(year, month - 1, day);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${monthNames[formattedDate.getMonth()]
    } ${formattedDate.getDate()}, ${formattedDate.getFullYear()}`;
}
const IndexPage = ({ data }) => {
  return (
    <>
      <section style={{ padding: "3rem 12rem", display: "flex" }}>
        <Box display={"flex"} alignItems={'center'} justifyContent={'center'} sx={{ minWidth: '30rem' }}>
          <img src="../../images/images/logos/jenkins/Jenkins-stop-the-war.svg" style={{ width: "400px" }} alt={"Jenkins Logo"} />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <h1>Jenkins</h1>
          <h2>Build great things at any scale</h2>
          <p>The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.
            <br />
            <br />
            We stand with the people of Ukraine. Please assist humanitarian efforts for the Ukrainian people and those affected by the military invasion of Ukraine by supporting international aid organizations, including the <a href="https://redcross.org.ua/en/donate/">Ukrainian Red Cross</a>
          </p>
          <div style={{ display: "flex", width: "fit-content", justifyContent: "flex-start", gap: "1rem" }}>
            <Link to="/download">
              <Button variant="contained" sx={{ backgroundColor: "#616161", borderRadius: "0.5rem" }}>Download</Button>
            </Link>
            <a href="add to link"><Button variant="contained" sx={{ backgroundColor: "#D32F2F", borderRadius: "0.5rem" }}>Documentation</Button></a>
          </div>
        </Box>
      </section>
      <div style={{
        background: "#4799d6",
        backgroundImage: "../../images/images/cdf/cdf-background-wide.jpg" ? "url(../../images/images/cdf/cdf-background-wide.jpg)" : "inherit",
        backgroundSize: 'cover',
        margin: "2rem 0rem",
        padding: 56,
      }}
      >
        <Swiper
          spaceBetween={36}
          slidesPerView={1}
          onSlideChange={() => console.log('Slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={true}
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          style={{
            "--swiper-pagination-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "8px"
          }}
        >
          <SwiperSlide>
            <div>
              <a href={"#"}>
                <div style={{ display: "flex", gap: "32px", alignItems: 'center', justifyContent: 'center', padding: "16px" }}>
                  <div style={{ color: "#FFFFFF" }}>
                    <h2 className="legend">Welcome to GSoC 2023!</h2>
                    <p>Google Summer of Code 2023 includes 4 Jenkins projects. Congratulations to the selected GSoC contributors.</p>
                    <p>Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!</p>
                  </div>
                  <div>
                    <img src="../../images/images/gsoc/gsoc_projects_contributors_selected.png"
                      alt={"GSoC selected contributor"}
                      style={{ height: "320px", maxWidth: "unset" }}
                    />
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <a href="#">
                <div style={{ display: "flex", gap: "32px", alignItems: 'center', justifyContent: 'center', padding: "16px" }}>
                  <div style={{ color: "#FFFFFF" }}>
                    <h2 className="legend">Welcome to GSoC 2023!</h2>
                    <p>Google Summer of Code 2023 includes 4 Jenkins projects. Congratulations to the selected GSoC contributors.</p>
                    <p>Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!</p>
                  </div>
                  <div>
                    <img src="../../images/images/gsoc/gsoc_projects_contributors_selected.png"
                      alt={"GSoC selected contributor"}
                      style={{ height: "320px", maxWidth: "unset" }}
                    />
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <a href="#">
                <div style={{ display: "flex", gap: "32px", alignItems: 'center', justifyContent: 'center', padding: "16px" }}>
                  <div style={{ color: "#FFFFFF" }}>
                    <h2 className="legend">Welcome to GSoC 2023!</h2>
                    <p>Google Summer of Code 2023 includes 4 Jenkins projects. Congratulations to the selected GSoC contributors.</p>
                    <p>Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!</p>
                  </div>
                  <div>
                    <img src="../../images/images/gsoc/gsoc_projects_contributors_selected.png"
                      alt={"GSoC selected contributor"}
                      style={{ height: "320px", maxWidth: "unset" }}
                    />
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        style={{ padding: 36 }}>
        <div className={container}>
          <div className={box}>
            <div>
              <Box className={featureInfo}
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
              >
                <MergeTypeIcon style={{ fontSize: "2rem", }} />
                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                  <h4>
                    Continuous Integration and Continuous Delivery
                  </h4>
                </Box>
              </Box>
              <p>
                As an extensible automation server, Jenkins can be used as a simple
                CI server or turned into the continuous delivery hub for any project.
              </p>
            </div>
          </div>
          <div className={box}>
            <div>
              <Box className={featureInfo}
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
              >
                <FileDownloadOutlinedIcon style={{ fontSize: "2rem", }} />
                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                  <h4>
                    Easy installation
                  </h4>
                </Box>
              </Box>
              <p>
                Jenkins is a self-contained Java-based program, ready to run
                out-of-the-box, with packages for Windows, Linux, macOS and other
                Unix-like operating systems.
              </p>
            </div>
          </div>
          <div className={box}>
            <div>
              <Box className={featureInfo}
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
              >
                <SettingsOutlinedIcon style={{ fontSize: "2rem", }} />
                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                  <h4>
                    Easy configuration
                  </h4>
                </Box>
              </Box>
              <p>
                Jenkins can be easily set up and configured via its web interface,
                which includes on-the-fly error checks and built-in help.
              </p>
            </div>
          </div>
          <div className={box}>
            <div>
              <Box className={featureInfo}
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
              >
                <AppsOutlinedIcon style={{ fontSize: "2rem", }} />
                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                  <h4>
                    Plugins
                  </h4>
                </Box>
              </Box>
              <p>
                With hundreds of plugins in the Update Center, Jenkins integrates
                with practically every tool in the continuous integration and
                continuous delivery toolchain.
              </p>
            </div>
          </div>
          <div className={box}>
            <div>
              <Box className={featureInfo}
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
              >
                <ExtensionOutlinedIcon style={{ fontSize: "2rem", }} />
                <ion-icon name="extension-puzzle-outline" role="img" className="md hydrated"></ion-icon>
                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                  <h4>
                    Extensible
                  </h4>
                </Box>
              </Box>
              <p>
                Jenkins can be extended via its plugin architecture, providing
                nearly infinite possibilities for what Jenkins can do.
              </p>
            </div>
          </div>
          <div className={box}>
            <div>
              <Box className={featureInfo}
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
              >
                <SocialDistanceOutlinedIcon style={{ fontSize: "2rem", }} />
                <ion-icon name="git-network-outline" role="img" className="md hydrated"></ion-icon>
                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                  <h4>
                    Distributed
                  </h4>
                </Box>
              </Box>
              <p>
                Jenkins can easily distribute work across multiple machines,
                helping drive builds, tests and deployments across multiple
                platforms faster.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: "32px", paddingRight: "32px" }}>
        <Video />
      </div>
      <IndexPageLayout>
        <h2>Recent Post</h2>
        <ul className={bloglisting}>
          {data.allFile.nodes.map(({ childrenAsciidoc }) => {
            const formattedDate = formatDate(childrenAsciidoc[0].fields.slug);
            const authorNames = childrenAsciidoc[0].pageAttributes.author ?? "author"
            const authorNamesWoSpaces = authorNames.replace(/\s/g, '')
            const authorArray = authorNamesWoSpaces.split(",")


            const opengraphImageSource =
              childrenAsciidoc[0].pageAttributes.opengraph ||
              "../../images/gsoc/opengraph.png";
            return (
              <li key={`${childrenAsciidoc[0].fields.slug}-${childrenAsciidoc[0].document.title}`} className={blogpost}>
                <Link
                  to={childrenAsciidoc[0].fields.slug}
                  style={{ textDecoration: "none", display: "flex", gap: "1.25rem", flexDirection: "column" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "15rem"
                    }}
                  >
                    <img
                      src={opengraphImageSource}
                      alt={childrenAsciidoc[0].document.title}
                      height="250px"
                      width="100%"
                    />
                  </div>
                  <h5 className={blogtitle}>{childrenAsciidoc[0].document.title}</h5>
                  <div className={blogteaser}>
                    Will include the blog teaser
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className={blogauthorinfo}>
                      <img
                        // src={authorImageSource}
                        src={opengraphImageSource}
                        style={{
                          height: "1rem",
                          width: "1rem",
                          borderRadius: "50%",
                          display: "inline",
                          position: "relative",
                          top: ".3rem",
                        }}
                        alt={""}
                      />
                      <p className={blogauthor}>{childrenAsciidoc[0].pageAttributes.author_name}</p>
                    </div>
                    <span>{formattedDate}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </IndexPageLayout>
      <div style={{ marginBottom: "3rem" }}>
        <center>
          <strong>
            We thank the following organizations for their major commitments to
            support the Jenkins project.
          </strong>
        </center>
      </div>
      <ul className={sponsorsJumbotron}>
        <li>
          <a href="https://cloudbees.com" rel="noopener noreferrer" target="_blank" >
            <img alt="CloudBees, Inc." src="../../images/images/sponsors/cloudbees.png" title="CloudBees, Inc." />
          </a>
        </li>
        <li>
          <a href="https://osuosl.org" rel="noopener noreferrer" target="_blank" >
            <img alt="Oregon State University Open Source Lab" src="../../images/images/sponsors/osuosl.png" title="Oregon State University Open Source Lab" />
          </a>
        </li>
        <li>
          <a href="https://cd.foundation/" rel="noopener noreferrer" target="_blank" >
            <img alt="Continuous Delivery Foundation" src="../../images/images/sponsors/cdf.png" title="Continuous Delivery Foundation" />
          </a>
        </li>
        <li>
          <a href="https://redhat.com" rel="noopener noreferrer" target="_blank" >
            <img alt="Red Hat, Inc." src="../../images/images/sponsors/redhat.png" title="Red Hat, Inc." />
          </a>
        </li>
        <li>
          <a href="https://aws.amazon.com/" rel="noopener noreferrer" target="_blank" >
            <img alt="AWS" src="../../images/images/sponsors/aws.png" title="AWS" />
          </a>
        </li>
        <li>
          <a href="https://github.com" rel="noopener noreferrer" target="_blank" >
            <img alt="GitHub, Inc." src="../../images/images/sponsors/github.png" title="GitHub, Inc." />
          </a>
        </li>
        <li>
          <a href="https://jfrog.com" rel="noopener noreferrer" target="_blank" >
            <img alt="JFrog" src="../../images/images/sponsors/jfrog.png" title="JFrog" />
          </a>
        </li>
      </ul>
      <div className="supporters">
        <center>
          <strong>
            We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.
          </strong>
        </center>
        <ul style={{ fontWeight: "bold", display: "flex", justifyContent: "space-evenly", listStyle: "none", padding: "0rem 10rem" }}>
          <li><a href="https://atlassian.com/">Atlassian</a></li>
          <li><a href="https://www.datadoghq.com/">Datadog</a></li>
          <li><a href="https://www.digitalocean.com/">Digital Ocean</a></li>
          <li><a href="https://www.discourse.org/">Discourse</a></li>
          <li><a href="https://www.fastly.com/">Fastly</a></li>
          <li><a href="https://www.ibm.com/">IBM</a></li>
          <li><a href="https://www.netlify.com/">Netlify</a></li>
          <li><a href="https://pagerduty.com/">Pagerduty</a></li>
          <li><a href="https://sentry.io/">Sentry</a></li>
          <li><a href="https://www.tsinghua.edu.cn/">Tsinghua University</a></li>
          <li><a href="https://xmission.com/">XMission</a></li>
        </ul>
      </div>
    </>
  );
}

export const Head = () => <Seo title="Jenkins - Open source automation server" />

export default IndexPage

export const pageQuery = graphql`
  query BlogIndex {
  allFile(
    limit:9
    filter: {sourceInstanceName: {eq: "pages"}, childrenAsciidoc: {elemMatch: {document: {title: {ne: "Author"}}}}}
    sort: {childrenAsciidoc: {fields: {slug: DESC}}}
  ) {
    nodes {
      childrenAsciidoc {
        fields {
          slug
        }
        document {
          title
        }
        pageAttributes {
          author_name
          github
          opengraph
          linkedin
          blog
          twitter
          medium
          irc
          description
        }
      }
    }
  }
}`

