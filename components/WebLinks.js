// Weblinks Page Sections
// created by @realvjy
// date: 29 Jul, 2022

import Image from "next/image";
import styled from "styled-components";
import { Button, ButtonLink, Container, StyledLink } from "./ReusableStyles";
import Link from "next/link";
import { ChevronRightIcon, HexIcon, HomeIcon, TwitterIcon, NewUp, OvalIcon } from './icons';
import allLinks from "../data/LinksData";
import bioData from "../data/BioData";

const Links = () => {

  // all user info from bioData
  const name = bioData[0].name;
  const url = bioData[0].url;
  const username = bioData[0].username;
  const titleImg = bioData[0].titleImg;
  const avatarImg = bioData[0].avatar;
  const description = bioData[0].description;
  const descShow = bioData[0].descShow;
  const subdesc = bioData[0].subdesc;
  const subdescShow = bioData[0].subdescShow;
  const footerText = bioData[0].footerText;
  const author = bioData[0].author;
  const authorURL = bioData[0].authorURL;
  const titleImage = "/title.svg";

  // Check what class to use oval or hex for avatar
  const avatarShape = bioData[0].nftAvatar ? `nft-clipped` : `oval-clipped`

  // Description and subdescription goes here
  const descriptionText = descShow ? description : `Write your own fall back text if description not in BioData.js or remove me/leave blank`
  const subdescText = subdescShow ? subdesc : `Write your own if you want or just remove me/leave blank`

  const newProduct = bioData[0].newProduct; // checking for newProduct flag true false
  const newProductUrl = bioData[0].newProductUrl; // get product url if available

  // Collect all links filter by type - social, project, nft and other etc=
  // get data for social section
  const social = allLinks.filter((el) => {
    return el.type === "social" && el.on
  });

  // Get data for install section
  const install = allLinks.filter((el) => {
    return el.type === "install" && el.on
  });

  // Get data for nfts
  const nfts = allLinks.filter((el) => {
    return el.type === "nft" && el.on
  });

  // Get data for other section
  const others = allLinks.filter((el) => {
    return el.type === "other" && el.on
  });

  return (
      <LinkWrapper>
        <LinkContainer>
          <TopPart>
            <LinkHeader>
              <Avatar>
                <AvatarWrap>
                  {/* Avatar svg  hex or oval if nftAvatar=true will convert to hex */}
                  <HexIcon />
                  <OvalIcon />
                  <div className={`${avatarShape} avatar-border`}></div>
                  <div className={`${avatarShape} avatar-fill`}></div>
                  <Image
                      src={avatarImg}
                      className={avatarShape}
                      alt={`${name}'s avatar`}
                      width={84}
                      height={84}
                  />
                </AvatarWrap>
              </Avatar>
              <Title>
                {/* Using titleimg flag to use image as title or text */}
                {titleImg ?
                    <Image 
                      src={titleImage} 
                      className="handle" 
                      alt={name}
                      width={150}
                      height={32}
                    /> :
                    <h1>{name}</h1>
                }
                {/* if your remove username from data it will not appear */}
                {
                  username ? <h3><a href={`${url}`}>{username}</a></h3> : ''
                }
              </Title>
            </LinkHeader>

            {/* Bio Section */}
            <LinkBio>
              {description && <h1>{descriptionText} </h1>}
              {subdesc && <h4>{subdescText}</h4>}
            </LinkBio>
            {/* End Bio Section */}

            {/* Weblinks started */}
            <WebLinkWrap>
              {/* Social Icon */}
              <LinkSection className="social">
                <div className="iconsonly">
                  {
                    social.map((i) => {
                      return (
                          <a href={i.url} key={i.title} target="_blank" rel="noreferrer">
                            <LinkBox className="socialIcon">
                              <Image 
                                src={i.icon} 
                                alt={i.title} 
                                width={24}
                                height={24}
                                style={{ filter: 'var(--img)' }} 
                              />
                            </LinkBox>
                          </a>
                      )
                    })
                  }
                </div>
              </LinkSection>
              {/* Social Icon */}

              {/* Install Section */}
              {
                install.length > 0 ?
                    <LinkSection>
                      <h3>{install[0].type}</h3>
                      {
                        install.map((i) => {
                          return (
                              <a href={i.url} key={i.title} target="_blank" rel="noreferrer">
                                <LinkBox>
                                  <LinkTitle>
                                    <Image 
                                      src={i.icon} 
                                      alt={i.title}
                                      width={20}
                                      height={20}
                                      style={{ filter: 'var(--img)' }} 
                                    /> 
                                    {i.title}
                                  </LinkTitle> 
                                  <NewUp />
                                </LinkBox>
                              </a>
                          )
                        })
                      }
                    </LinkSection> : ''
              }
              {/* End Install Section */}

              {/* NFT Section */}
              {
                nfts.length > 0 ?
                    <LinkSection>
                      <h3>{nfts[0].type}s</h3>
                      {
                        nfts.map((i) => {
                          return (
                              <a href={i.url} key={i.title} target="_blank" rel="noreferrer">
                                <LinkBox>
                                  <LinkTitle>
                                    <Image 
                                      src={i.icon} 
                                      alt={i.title}
                                      width={20}
                                      height={20}
                                      style={{ filter: 'var(--img)' }} 
                                    /> 
                                    {i.title}
                                  </LinkTitle> 
                                  <NewUp />
                                </LinkBox>
                              </a>
                          )
                        })
                      }
                    </LinkSection>
                    : ''
              }
              {/* End NFT Section */}

              {/* Other Section */}
              {
                others.length > 0 ?
                    <LinkSection>
                      <h3>{others[0].type}</h3>
                      {/* BioData.js > newProduct == true */}
                      {/* New Section will render once newProduct == true */}
                      {(newProduct) ? <NewSection>
                        <a href={newProductUrl} target="_blank" rel="noreferrer">
                          <Image
                              src={'/newproduct.png'}
                              className="newproduct"
                              alt="New product"
                              width={400}
                              height={200}
                          />
                        </a>
                      </NewSection> : ''
                      }
                      {/* End Biodata.js, You can move this section anywhere */}
                      {
                        others.map((i) => {
                          return (
                              <a href={i.url} key={i.title} target="_blank" rel="noreferrer">
                                <LinkBox>
                                  <LinkTitle>
                                    <Image 
                                      src={i.icon} 
                                      alt={i.title}
                                      width={20}
                                      height={20}
                                    /> 
                                    {i.title}
                                  </LinkTitle> 
                                  <NewUp />
                                </LinkBox>
                              </a>
                          )
                        })
                      }
                    </LinkSection> : ''
              }
              {/* End Other Section */}

            </WebLinkWrap>
            {/* End Weblinks */}
          </TopPart>
          <BottomPart>
            <LinkFoot>
              <h4>{footerText} <a href={authorURL}>{author}</a></h4>
            </LinkFoot>
          </BottomPart>

        </LinkContainer>
      </LinkWrapper>

  )
};

export default Links;

// ... rest of the styled components remain the same
