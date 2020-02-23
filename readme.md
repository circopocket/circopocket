<div align="right">
    <img height='20px' src='https://raw.githubusercontent.com/circopocket/branding/master/logos/logo-long.png'/>
</div>

# Circopocket [![Build Status](https://travis-ci.com/amazingandyyy/circopocket.svg?token=C7NJ8bT8vb8dmq7fMDsa&branch=master)](https://travis-ci.com/amazingandyyy/circopocket)

circopocket.com Official Resource for Website and Server

## What is Circopocket

Review, Explore, Earn

- Order, unpackage and review
- Explore more new products
- Earn more cashback + bonus

## Feature

- [ ] account CRUD
  - [x] create
    - [x] email verification
  - [x] read
    - [x] login
    - [x] account dashboard
  - [ ] update
    - [x] basic name
    - [ ] reset password
    - [ ] change password
    - [x] update avatar image and save on aws s3
    - [ ] login amazon
    - [ ] phone number verification
    - [ ] venmo verification
  - [ ] delete account
- [ ] product CRUD
  - [x] create
    - [x] fetch product details api
    - [x] create new product
  - [x] read
    - [x] list at client
  - [ ] update
    - [x] update detials by admin
    - [ ] deactive/active by admin
  - [ ] delete
- [ ] review CRUD
  - [x] create
  - [ ] read
    - [x] read one(need style)
    - [ ] read user's own list(need style)
  - [x] update
    - [x] add new order number from user
    - [x] update progress
- [ ] Payment system
  - [ ] link to venmo
  - [ ] admin payout
    - [ ] venmo rqcode
- [ ] Advance Features
  - [ ] admin dashboard design
    - [ ] product
    - [ ] orders
    - [ ] pay out status
  - [ ] referral program
    - [ ] rule
    - [ ] graph
    - [ ] referral code generator
  - [ ] insight dashboard
    - [ ] user ranking
    - [ ] user behavior
    - [ ] referral infrastructure

## Company

- [ ] VIS
  - [x] logo
  - [x] font
  - [x] color
    - primary green: `#13AB67`
  - [ ] style definition
- [x] email
  - [x] host by namecheap, served by cloudfare
  - [x] team@circopocket.com
  - [ ] email signature
  - [ ] email template
- [ ] server
  - [x] server(`https://server.circopocket.com`)
  - [x] webhook(`https://server.circopocket.com/webhook`)
  - [ ] docs(`https://server.circopocket.com/docs`)
  - [ ] server 404 handler
- [x] client app
  - [x] website(`https://www.circopocket.com`)
  - [x] website(`https://circopocket.com`)
  - [x] 404 handler _> redirect to `/#`, handled by ReactRouter
- [ ] company social account
  - [x] [github](https://github.com/circopocket)
  - [x] [twitter](https://twitter.com/revieweer_team)
  - [x] [facebook](https://facebook.com/circopocket)
  - [x] [medium](https://medium.com/circopocket)
  - [x] [linkedin](https://www.linkedin.com/company/circopocket/)
  - [ ] Wechat Official Account
- internal
  - [ ] comunication app
  - new hires
    - [ ] Chief Operating Officer
    - [ ] Chief Sales Offiver
    - [ ] Site Quality(React/Redux) Engineer
    - [ ] Quality(Infrustructure) Engineer
    - [ ] Writor(FB, Wechat, Medium)

## Production DevOps/Setups

- [x] Automatic CI
  - [x] [travis-ci](https://travis-ci.com/amazingandyyy/circopocket)
- [ ] Testing
  - [ ] Unit Testing
    - [ ] Node endpoints
    - [ ] React Snapshot
  - [x] Linter checking
- [x] Internet Security
  - [x] [https](https://www.cloudflare.com/a/overview/circopocket.com)
  - [ ] DDos Protection
- [x] Monitoring
  - [x] [Sentry](https://sentry.io/circopocket/)
    - [node](https://sentry.io/circopocket/express/)
    - [reac](https://sentry.io/circopocket/react-0v/)
  - [ ] New Relic
- [x] Traffic Analytics
  - [x] [Google Analytics](https://analytics.google.com/analytics/web/#realtime/rt-overview/a97391318w170557385p170363690/)
- [ ] SEO
  - [x] manifest
  - [ ] PWA
  - [ ] SSR
  - [ ] open graph tags
- [ ] UX Tracking
  - [ ] Mixpanel
  - [ ] Segment
- [ ] RWD
  - [x] Google Mobile-Friendly Test [Report](https://search.google.com/test/mobile-friendly?id=vCXMGoCZL5l9phVAeNg_Nw)
- Customer Services
  - [ ] Intercom
  - [ ] Helping page

## License/Copy Rights

All rights reserved.

<div align="center">
    <img height='20px' src='https://raw.githubusercontent.com/circopocket/branding/master/logos/circopocket-r-800.png'/>
</div>
