pdf-on-site is small library for rendering your pdf on site with a possibility to download it (supported mobile scaling).

![alt text](https://github.com/appsome-solutions/pdf-on-site/blob/master/pdf-on-site.png "pdf rendered on blank web page with download button at the top")

## Motivation

Preview of what happen with your, sent pdf offer.

## How it works?

By using this tool you render pdf offer on your site in a Canvas (you can even copy a text from it).
With that you can get 2 important information - who opened it and how many times. 
Due to those data you can better identify your potential customer interest power by creating funnels.
It means you can know which customer will more likely need your product or services.

E.g. person who:
 1. got invitation -> accepted-> answered -> said maybe later -> read offer more than 1
 
 more likely wants your services/product than person who:
 
 2. got invitation -> accepted-> answered -> said maybe later -> not read offer
 
With that information you can focus more on a predefined customer groups which made additional step by clicking a link.

## Benefits

- information about who and how many times clicked your offer
- creating remarketing groups e.g. for Facebook, Google Ads or Linkedin campaign
- increased ratio of your main website visits

## Solution

### About
This solution is based on react, styled-components and react-pdf libraries.

### Installation

With yarn:

`yarn add @appsomesolutions/pdf-on-site`

With npm:

`npm install @appsomesolutions/pdf-on-site`

### Usage

Usage is very simple. We import it and use as normal component:
```javascript
import PdfOnSite from "@appsomesolutions/pdf-on-site";
//...
<PdfOnSite pdfHref="/offer.pdf" documentWidth={1400} />
````

`pdfHref` - is our pdf location path (not relative, website path).

`documentWidth` - exact document width in pixels

### Todo

- [ ] Calculate pdf size before the render
- [ ] Remove console warnings (according to this https://github.com/wojtekmaj/react-pdf/issues/495)


## Life example
[Code Sandox](https://codesandbox.io/s/appsomesolutionspdf-on-site-iy7t6)

## Appsome Solutions
All thanks for [Appsome Solutions](https://www.appsome-solutions.com/) - Software Development Company from Poland for sharing their code and knowledge with the community for free ❤
