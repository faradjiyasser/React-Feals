const FooterData ={
    Products: [
      {id:1,name:"Membership", route: "/LandingPages"},
      {id:2,name:"Quality", route: "/Popups"},
      {id:3,name:"Education", route: "LandingTemplates"},
      {id:4,name:"Terms of Service", route: "Integrations"},
      {id:5,name:"Refund policy", route: "ProductSecurity"},

    ],
    Solutions:[
      {id:1,name:"Stories", route: "/"},
      {id:2,name:"Help", route: "/"},
      {id:3,name:"Give $20 Get $20", route: "/"},
      {id:4,name:"Do Not Track", route: "/"},

    ],
    Company: [
      {id:1,name:"844-311-9090", route: "/"},
      {id:2,name:"hello@feals.com", route: "/"},

    ],
    GetinTouch:[
      {id:1,name:"Join our email list to get all the latest Feals news and first access to offers right to your inbox.", route: "/"},
      {id:2,name:
      <>
        <input type="text" placeholder="your-email@" className="place-holder"/>
        <input type="button" value="Join" className="btn-default"/>
      </>, route: "/"},

    ],
    headings:{
      Products:"Shop",
      Solutions:"Mission",
      Company:"CONTACT US",
      GetinTouch:"STAY IN TOUCH",
    }
  }
  export default FooterData;
