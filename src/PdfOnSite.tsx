import React from 'react';
// @ts-ignore
import { Document, Page, pdfjs } from 'react-pdf';

import styled from 'styled-components';
import { media } from '@appsomesolutions/rwd-utils';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const OfferWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DownloadWrapper = styled.div`
  width: 100%;
  background-color: #bdbdbd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid grey;

  ${media.xs`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    margin-bottom: 0;
  `}
  ${media.sm`
    position: static;
    margin-bottom: 24px;
  `}
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    font-weight: 600;
    color: #361d32;
    margin: 0;
  }
  
  svg {
    padding: 16px;
  }
  
`;

const StyledDocument = styled(Document)`
  ${media.xs`
    max-height: calc(100vh - 57px);
    max-width: 100vw;
    overflow: scroll;
    margin-bottom: 57px;
  `}
  ${media.sm`
    overflow: auto;
    max-height: unset;
    max-width: unset;
  `}
`;

type PdfOnSiteProps = {
    // e.g. /offer.pdf or full url
    pdfHref: string;
    documentWidth?: number;
};

const PdfOnSite: React.FC<PdfOnSiteProps> = ({ pdfHref, documentWidth= 1366 }) => {

  const SCALE = documentWidth > document.body.clientWidth ? document.body.clientWidth / documentWidth : 1;

  return (
      <OfferWrapper>
        <DownloadWrapper>
          <StyledLink href={pdfHref} download>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
            <p>Download pdf</p>
          </StyledLink>
        </DownloadWrapper>
        <div>
          <StyledDocument file={pdfHref} loading="Please wait, rendering pdf..." renderMode="svg">
            <Page pageNumber={1} scale={SCALE} />
          </StyledDocument>
        </div>
      </OfferWrapper>
  );
};

export default PdfOnSite;
