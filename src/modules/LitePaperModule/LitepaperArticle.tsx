/* eslint-disable @next/next/no-img-element */
import React from "react";
import { StyledLitePaperArticle } from "./litepaper.style";

type Props = {};

const LitepaperArticle = (props: Props) => {
  return (
    <StyledLitePaperArticle className="scroll-smooth">
      <section id="world-of-chakra">
        <h3 className="font-marco font-semibold text-red-ff0 mb-10">
          The World of Chakra
        </h3>
        <figure>
          <img className="mb-10 w-full" src="/images/litepaper/1.png" alt="1" />
        </figure>
        <p className="mb-4">
          Chakra is a collaborative storytelling platform that enables players
          to participate in (and create) shared adventures, brought to life
          through gaming. Chakra leverages the power of myth (culture), gaming
          (product), and web3 (commerce & infrastructure) to create this shared
          narrative.
        </p>
        <p className="mb-10">
          We’re creating a dynamic, ever expanding IP anchored in eastern
          mythologies that mimics natural evolution of mythos. Chakra seeks to
          bring these millennia old myths to life within a high-fidelity gaming
          sandbox.
        </p>

        <h3 className="font-marco font-semibold text-red-ff0 mb-10" id="lore">
          Lore
        </h3>

        <h4
          className="font-marco font-semibold text-white mb-10"
          id="the-premise"
        >
          The Premise
        </h4>
        <figure>
          <img className="mb-10 w-full" src="/images/litepaper/2.png" alt="1" />
        </figure>
        <p className="mb-10">
          Chakra is an alternate universe based on our current reality; set in a
          time when the ancient myths and mythologies rooted in the eternal
          order come alive. The significance of humans is in question as they
          find out, they are but a footnote in the infinite expanse of creation.
        </p>
        <h4
          className="font-marco font-semibold text-white mb-10"
          id="the-story"
        >
          The Story
        </h4>
        <p className="mb-10">
          The accepted history of humans becomes questionable as beings from
          various dimensions pour into the earth.The legendary creatures holding
          enormous power are now eyeing this domain to conquer. Can the
          evolution of humans combat these ancient entities?
        </p>
      </section>

      <section id="ecosystem">
        <h3 className="font-marco font-semibold text-red-ff0 mb-6">
          The Ecosystem
        </h3>

        <p className="mb-12">
          The Chakra ecosystem leverages the power of gaming and the wonders of
          web3 to create a well-defined yet boundless fantasy meta-world
          inspired by millennia-old Eastern mythologies.
        </p>

        <figure className="mb-10">
          <img className="w-full" src="/images/litepaper/3.png" alt="1" />
          <figcaption className="text-white text-xs capitalize">
            flywheel
          </figcaption>
        </figure>
        <p className="mb-10">
          The Chakra ecosystem aims to create a robust flywheel effect by
          synergistically combining elements of web3, gaming, collaborative
          storytelling, and community involvement. The ecosystem focuses on
          three main pillars: Content, Commerce, and Expansion, which work
          together to maximize utility, drive adoption, and ensure sustainable
          growth.
        </p>

        <p className="mb-2">
          <span className="font-bold underline">Content</span>{" "}
        </p>
        <ol className="mb-10">
          <li>
            <p>Gaming - Immersive Video Games</p>
          </li>
          <li>
            <p>Worldbuilding - Manga and Cinematics</p>
          </li>
          <li>
            <p>DLC & Virtual assets</p>
          </li>
        </ol>

        <p className="mb-2">
          <span className="font-bold underline">Commerce</span>{" "}
        </p>
        <ol className="mb-10">
          <li>
            <p>Native unit of account - $SOMA</p>
          </li>
          <li>
            <p>DeFi - Dex and LP</p>
          </li>
          <li>
            <p>Marketplace - NFT and Virtual Assets trade</p>
          </li>
          <li>
            <p>Game Vendor - In-game purchases</p>
          </li>
          <li>
            <p>
              Content Store - Open content marketplace for game ready assets
            </p>
          </li>
        </ol>

        <p className="mb-2">
          <span className="font-bold underline">Expansion</span>{" "}
        </p>
        <ol className="mb-10">
          <li>
            <p>Content store and library - Purchasable Content</p>
          </li>
          <li>
            <p>Rule Books - Rule Set for Content Creation</p>
          </li>
          <li>
            <p>Governance - Vetting and Onboarding Creators</p>
          </li>
          <li>
            <p>Accelerator - Grants and Incubation</p>
          </li>
        </ol>

        <h4 id="gaming" className="font-marco font-semibold text-white mb-10">
          Gaming
        </h4>
        <figure className="mb-10">
          <img className="w-full" src="/images/litepaper/4.png" alt="1" />
          <figcaption className="text-white text-xs capitalize">
            Chakra Conundrum
          </figcaption>
        </figure>
        <p className="mb-10">
          Our games are designed to immerse players in the Chakra universe. As a
          game studio at heart, this is our chosen medium to achieve critical
          mass necessary for capturing platform network effects. Apart from
          driving adoption and commerce gaming as a medium is pivotal to create
          stickiness through joy rather than “numbers go up”.
        </p>
        <p className="mb-6">
          Chakra universe will be seeded with three game titles in the near term
        </p>

        <p className="mb-6">
          <span className="font-bold underline">Chakra Conundrum </span>{" "}
          <span className="text-red-ff0">{`->`}</span> In Conundrum, players
          face off (PvP) in the ultimate game of strategy and deception: the
          iterative {`prisoner's `} dilemma.
        </p>

        <p className="mb-2">Game description :</p>
        <p className="mb-6">
          <i>
            In this world of infinite possibility and endless treachery, only
            the strongest and most cunning will prevail. Only by mastering the
            art of coordination and outsmarting your opponents can you hope to
            succeed in your quest and emerge as a true champion of the Chakra
            Conundrum
          </i>
        </p>

        <p className="mb-6">
          <span className="font-bold underline">Chakra Dungeons </span>{" "}
          <span className="text-red-ff0">{`->`}</span> A 3D ARPG survivor with
          comprehensive loot mechanics supporting single player and team based
          gameplay. (PvE)
        </p>
        <p className="mb-3">Game description : </p>
        <p className="mb-6">
          <i>
            Delve into digital catacombs and slaughter enemies for a
            never-ending shower of loot. Team up with friends to increase the
            challenge (and loot quality).
          </i>
        </p>

        <p className="mb-6">
          <span className="font-bold underline">Chakra Duels </span>{" "}
          <span className="text-red-ff0">{`->`}</span> A PvP turn based fighting
          game with progressive duel mechanics and wagering. (In development)
        </p>

        <p className="mb-2">
          <span className="font-bold">Game Modes</span>{" "}
        </p>
        <ol className="mb-10">
          <li>
            <p>
              <strong>PvP :</strong> supporting wagering & leaderboard rewards
            </p>
          </li>
          <li>
            <p>
              <strong>PvE :</strong> loot based gameplay with level progression
              system
            </p>
          </li>
        </ol>

        <figure className="mb-10">
          <img className="w-full" src="/images/litepaper/5.png" alt="1" />
          <figcaption className="text-white text-xs capitalize">
            Chakra Dungeons
          </figcaption>
        </figure>

        <h4
          className="font-marco font-semibold text-white mb-10"
          id="world-building"
        >
          Ecosystem Expansion & World-building
        </h4>
        <p className="mb-10">
          Chakra Mythos is codified through a series of Guidebooks, Manga,
          Cinematics and Digital Assets. This body of work serves as the
          scaffolding for community to expand upon.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <figure className="mb-10">
            <img className="w-full" src="/images/litepaper/6-1.png" alt="1" />
            <figcaption className="text-white text-xs capitalize">
              manga
            </figcaption>
          </figure>
          <figure className="mb-10">
            <img className="w-full" src="/images/litepaper/6-2.png" alt="1" />
            <figcaption className="text-white text-xs capitalize">
              manga
            </figcaption>
          </figure>
        </div>
        <ol>
          <li>
            <p className="mb-6">
              <span className="font-bold">Guidebooks</span>{" "}
              <span className="text-red-ff0">{`->`}</span> Art-style guides,
              Technical Documentation, Lore and character guides, Game content
              assets and Guide lines
            </p>
          </li>
          <li>
            <p className="mb-6">
              <span className="font-bold">Manga & Cinematics </span>{" "}
              <span className="text-red-ff0">{`->`}</span> Manga and Cinematics
              releases each week with embedded plot-arcs, clues and alpha that
              inform further development
            </p>
          </li>
          <li>
            <p className="mb-4">
              <span className="font-bold">Virtual Assets </span>{" "}
              <span className="text-red-ff0">{`->`}</span> A two-fold periodic
              release of Virtual assets that enable true ownership and expansion
              of the ecosystem.
            </p>
            <ol
              type="i"
              style={{
                listStyleType: "lower-roman !important",
              }}
              className="mb-10 pl-4 text-white w-3/4"
            >
              <li>
                <p>
                  NFTs in the form of characters, skins, items, cosmetics,
                  weapons, loot etc that can be traded in the native marketplace
                </p>
              </li>
              <li>
                <p>
                  Open-sourced or purchase-able game content & assets from
                  Chakra games ecosystem (and community creators)
                </p>
              </li>
            </ol>
          </li>
        </ol>

        <div className="grid grid-cols-2 gap-8">
          <figure className="mb-10">
            <img className="w-full" src="/images/litepaper/va-1.png" alt="1" />
            <figcaption className="text-white text-xs capitalize">
              virtual assets
            </figcaption>
          </figure>
          <figure className="mb-10">
            <img className="w-full" src="/images/litepaper/va-2.png" alt="1" />
            <figcaption className="text-white text-xs capitalize">
              virtual assets
            </figcaption>
          </figure>
        </div>

        <p className="mb-6">
          Chakra ecosystem is envisioned as a platform designed to empower
          community creators to expand the world through Art & Lore, game
          content and game development. All stages of the process are subject to
          community voting, honoring our commitment to decentralization.
        </p>

        <p className="font-bold mb-6">
          <strong className="underline">For Content Creators</strong>
          <span className="text-red-ff0 ml-1">{`->`}</span>
        </p>
        <p className="mb-6">
          Creative energy of the community is harnessed to enrich and help
          expand the ecosystem. Content creators are invited to submit game
          content in accordance published guidelines. Each submission undergoes
          a review process, and standout content secures a spot in the content
          store, reflecting the collective preferences of the community.
        </p>

        <p className="font-bold mb-6">
          <strong className="underline">For Game Developers</strong>
          <span className="text-red-ff0 ml-1">{`->`}</span>
        </p>
        <p className="mb-6">
          Developers are invited to actively participate and influence the
          Chakra games ecosystem. They have the choice of purchasing game
          content from the content store or creating their own. If the project
          is approved through community voting, developers may receive grants
          from community and treasury. Emphasis is also placed on the
          opportunities for developers to secure liquidity and contribute to the
          {`ecosystem's`} economic vibrancy.
        </p>

        <p className="mb-6">
          <i>
            We will be following quadratic funding principles to match grant and
            funding to expansion projects
          </i>
        </p>

        <p className="font-bold mb-2 underline">
          <strong>What this Achieves</strong>
        </p>

        <ol className="mb-10 list-disc pl-4 text-white w-3/4">
          <li>
            <p>Community participation in expanding ecosystem</p>
          </li>
          <li>
            <p>Fair and optimal way to fund community based projects.</p>
          </li>
          <li>
            <p>Grants incentivizes development, broadening the user base.</p>
          </li>
          <li>
            <p>
              Provides fair investment opportunities at launch for community.
            </p>
          </li>
          <li>
            <p>Enhances liquidity of the native token.</p>
          </li>
          <li>
            <p>Earning opportunities to creators of game content</p>
          </li>
          <li>
            <p>
              Directs transaction fee revenue from content sales to the
              treasury.
            </p>
          </li>
          <li>
            <p>
              Increases the availability of NFTs and virtual assets, creating
              more revenue streams
            </p>
          </li>
        </ol>

        <h4 className="font-marco font-semibold text-white mb-10" id="web3">
          Web3
        </h4>
        <p className="mb-6">
          Web3 sets the stage for a self-sovereign financial system, an open
          contributor/creator economy, and a universal digital representation
          and ownership layer via NFTs.
        </p>
        <p className="mb-10">
          Ecosystem leverages web3 technologies NFTs, DeFi primitives & a Native
          unit of account ($SOMA) to provide greater control and value to users
          whose incentives are aligned with those of Chakra Ecosystem.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <figure className="mb-10">
            <img
              className="h-full object-cover w-full"
              src="/images/litepaper/web3-1.png"
              alt="1"
            />
            <figcaption className="text-white text-xs capitalize">
              chakra chieftains
            </figcaption>
          </figure>
          <figure className="mb-10">
            <img
              className="h-full object-cover w-full"
              src="/images/litepaper/web3-2.png"
              alt="1"
            />
            <figcaption className="text-white text-xs capitalize">
              chakra 10k
            </figcaption>
          </figure>
        </div>
        <p className="mb-4">
          <span className="font-bold">NFTs | Two Core Collections of NFTs</span>{" "}
        </p>
        <ol className="list-disc pl-4 mb-6 text-white">
          <li>
            <p className="mb-3">
              <span className="font-bold">Chakra Chieftains</span>{" "}
              <span className="text-red-ff0">{`->`}</span>A unique collection of
              500 OG PFP characters that play a crucial role in the ownership of
              the ecosystem. These NFTs facilitate value accrual to their
              holders by acting as a significant reward multiplier among other
              benefits.
            </p>
          </li>
          <li>
            <p className="mb-3">
              <span className="font-bold">Chakra 10k</span>{" "}
              <span className="text-red-ff0">{`->`}</span>A larger set of 10k 3D
              characters that are functional in gaming, aimed at engaging a
              wider audience within the ecosystem. While these also enable value
              accrual to holders through multipliers, their impact is slightly
              lower compared to the Chakra Chieftains.
            </p>
          </li>
        </ol>
        <p className="mb-10">
          Beyond the core collections, the Chakra ecosystem also offers a
          plethora of game-related NFTs and digital collectibles, designed to
          enhance gameplay and enrich the user experience. These include assets
          such as cosmetics, weapons, loot, skins, access passes and
          consumables.
        </p>
        <p className="mb-10 w-4/5">
          Core public infrastructure to help create a virtuous cycle of
          activity, expansion & commerce within the Chakra ecosystem.
        </p>
        <h4
          className="font-marco font-semibold text-white mb-10"
          id="public-goods"
        >
          Public Goods
        </h4>

        <p className="mb-10">
          Core non-rivalrous public infrastructure to help create a virtuous
          cycle of activity, expansion & commerce within the Chakra ecosystem.
        </p>

        <figure>
          <img className="mb-10 w-full" src="/images/litepaper/8.png" alt="1" />
        </figure>

        <ol>
          <li>
            <p className="mb-4">
              <span className="font-bold">Playable Game Content</span>{" "}
              <span className="text-red-ff0">{`->`}</span>Chakra games
              accessible for all users to play and engage with the ecosystem
            </p>
          </li>
          <li>
            <p className="mb-4">
              <span className="font-bold">Rule Book</span>{" "}
              <span className="text-red-ff0">{`->`}</span> Codified guides
              informing on several critical aspects of content creation
            </p>
          </li>
          <li>
            <p className="mb-4">
              <span className="font-bold">DEX</span>{" "}
              <span className="text-red-ff0">{`->`}</span>AMM DEX that helps
              onboard and off ramp crypto users from across chains
            </p>
          </li>
          <li>
            <p className="mb-4">
              <span className="font-bold">Marketplace</span>{" "}
              <span className="text-red-ff0">{`->`}</span>NFT and virtual asset
              market place for P2P trading
            </p>
          </li>
          <li>
            <p className="mb-4">
              <span className="font-bold">Content Store</span>{" "}
              <span className="text-red-ff0">{`->`}</span>Native content store
              to buy and sell community created (community approved) game ready
              content.
            </p>
          </li>
          <li>
            <p className="mb-4">
              <span className="font-bold">Game Vendor</span>{" "}
              <span className="text-red-ff0">{`->`}</span>Vendor acting as main
              sink for tokens through which players can access NFT drops and DLC
            </p>
          </li>
          <li>
            <p className="mb-4">
              <span className="font-bold">Wagering System</span>{" "}
              <span className="text-red-ff0">{`->`}</span>Wagering contracts
              that enable a robust wager 2 earn mechanisms for certain PvP and
              PvE game modes
            </p>
          </li>
          <li>
            <p className="mb-10">
              <span className="font-bold">Governance System</span>{" "}
              <span className="text-red-ff0">{`->`}</span> Governance
              infrastructure (discussion & proposal forums and voting) using
              quadratic funding principles to facilitate optimal and fair
              governance of ecosystem expansion
            </p>
          </li>
        </ol>

        {/* <h4
          className="font-marco font-semibold text-white mb-10"
          id="game-expansion"
        >
          Game Expansion
        </h4>
        <p className="mb-4">
          <span className="font-bold">Content Creation</span>{" "}
        </p>
        <ol
          className="mb-3"
          style={{
            marginBottom: 32,
          }}
        >
          <li>
            <p className="">
              <span className="">
                Submit Game content as per published guidelines.
              </span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">
                Content to be reviewed as per guidelines.
              </span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">
                Content in each category with the most upvotes receives a spot
                in the content store, immortalizing the community’s decisions
              </span>{" "}
            </p>
          </li>
        </ol>
        <p className="mb-4">
          <span className="font-bold">Game Content Categories</span>{" "}
        </p>
        <ul className="mb-8">
          <li>
            <p className="">
              <span className="">{`->`} Animations</span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">{`->`} 3D models</span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">{`->`} Game modules</span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">{`->`} VFX</span>{" "}
            </p>
          </li>
        </ul>
        <p className="mb-4">
          <span className="font-bold">
            Expansion of Chakra Ecosystem | Pipeline for Developers+Creators
          </span>{" "}
        </p>
        <ol className="mb-10">
          <li>
            <p className="">
              <span className="">
                Purchase game content in content store or creates his own
                content
              </span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">Create POC</span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">Submit POC to DAO</span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">
                If project is approved- DAO can decides on a grant from matching
                pool
              </span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">Treasury to match the grant</span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">
                Opportunity to raise private round from DAO
              </span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">Build out game (incubated by DAO)</span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">
                Liquidity is injected into Chakra token by project developers at
                launch
              </span>{" "}
            </p>
          </li>
          <li>
            <p className="">
              <span className="">
                LP tokens are wrapped for use as primary currency for launched
                project
              </span>{" "}
            </p>
          </li>
        </ol>
        <p className="mb-6">
          <span className="">
            We will be following quadratic funding principles to match grant and
            funding to expansion projects
          </span>{" "}
        </p>
        <p className="mb-2">
          <span className="font-bold">What this Achieves</span>{" "}
        </p>
        <ul className="list-disc pl-4 mb-10 text-white">
          <li>
            <p>Community participation in expanding ecosystem</p>
          </li>
          <li>
            <p>Fair and optimal way to fund community based projects</p>
          </li>
          <li>
            <p>
              Dev/Creator grants to build more content for chakra universe
              thereby onboarding more users
            </p>
          </li>
          <li>
            <p>Fair launch investment opportunity for community and holders</p>
          </li>
          <li>
            <p>More liquidity to chakra token</p>
          </li>
          <li>
            <p>Earning opportunities to creators of game content</p>
          </li>
          <li>
            <p>Transaction fees to treasure from content sales</p>
          </li>
          <li>
            <p>
              More NFTs and virtual assets, more dex usecases, more revenues
            </p>
          </li>
        </ul> */}
      </section>

      <h3 className="font-marco font-semibold text-red-ff0 mb-10" id="economy">
        Economy
      </h3>
      <h4
        className="font-marco font-semibold text-white mb-10"
        id="token-design"
      >
        Token Design
      </h4>
      <p className="mb-10">
        This section of the report discusses the design of the environment in
        which the assets and agents are on the network operator. This involves
        designing the parameters of the game, such as the economic agents or
        stakeholders and their interactions.
      </p>
      {/* <figure>
        <img className="mb-10 w-full" src="/images/litepaper/9.png" alt="1" />
      </figure> */}

      <p className="mb-4">
        <span className="font-bold underline">Token Objectives</span>
      </p>

      <p className="mb-6">
        The objective of this token design is to support the platform in
        achieving the following goals:
      </p>

      <ol className="mb-10 text-white pl-5 list-disc">
        <li>
          <p>Create a sustainable and transparent Token Economy</p>
        </li>
        <li>
          <p>Long term sustainability</p>
        </li>
        <li>
          <p>
            Profit maximization of each stakeholder involved by keeping the
            design fair and unbiased
          </p>
        </li>
        <li>
          <p>
            Market and mechanism design which encourages and flywheels the
            positive growth and expansion of the game
          </p>
        </li>
        <li>
          <p>Balanced rewards and incentives for Exis ting and new users.</p>
        </li>
        <li>
          <p>
            Establishing a governance mechanism that incentivizes just,
            appropriate, and truthful decision-making.
          </p>
        </li>
        <li>
          <p>Discourage Bad actors from affecting the game’s design.</p>
        </li>
      </ol>

      <p className="mb-10">
        The Chakra ecosystem has been optimized with the use of multiple assets,
        including $SOMA its native token, and other supporting related assets
        which all serve a unique role in the system.
      </p>

      <p className="mb-6">
        <span className="font-bold">$SOMA</span>
      </p>
      <p className="mb-6">
        The primary token for the CHAKRA ecosystem that allow interactions and
        value transfer in the whole ecosystem. It’s An EVM compatible token for
        use on Arbitrum.
      </p>

      <p className="mb-4">
        <span className="font-bold underline">Supply</span>
      </p>
      <p className="mb-6">
        <span className="font-bold">How to get $SOMA token?</span>
      </p>
      <ul className="mb-10">
        <li>
          <p>
            <span className="text-red-ff0">{`->`}</span> Launch (public +
            private)
          </p>
        </li>
        <li>
          <p>
            <span className="text-red-ff0">{`->`}</span> DEX (3rd party &
            native)
          </p>
        </li>
        <li>
          <p>
            <span className="text-red-ff0">{`->`}</span> Through Gameplay
            [Chakra dungeon crawler]
          </p>
        </li>
        <li>
          <p>
            <span className="text-red-ff0">{`->`}</span> Earn through wagering
            [Chakra PvP & Special events in Dungeon crawler]
          </p>
        </li>
        <li>
          <p>
            <span className="text-red-ff0">{`->`}</span> CEX listings (in the
            future)
          </p>
        </li>
      </ul>
      <p className="font-bold text-white mb-4 underline" id="utility">
        Utility
      </p>
      <p className="mb-4">
        <span className="font-bold">$SOMA Token Utility</span>
      </p>
      <p className="">
        <span className="text-red-ff0">{`◇`}</span> Staking
      </p>
      <p className="">
        <span className="text-red-ff0">{`◇`}</span> Purchase virtual assets
        (NFTs, DLCs & Content)
      </p>
      <p className="">
        <span className="text-red-ff0">{`◇`}</span> Wagering in PvP
      </p>
      <p className="">
        <span className="text-red-ff0">{`◇`}</span> LP for DEX
      </p>
      <p className="">
        <span className="text-red-ff0">{`◇`}</span> Governance
      </p>
      <p className="mb-10">
        <span className="text-red-ff0">{`◇`}</span> Liquidity provision for
        expansion games
      </p>

      <p className="mb-3">
        <span className="font-bold underline">Other Key Assets</span>
      </p>

      <ul className="text-white list-disc pl-5">
        <li>
          <p className="mb-5">
            <span className="font-bold">Chieftain NFT</span>
            <span className="text-red-ff0">{` -> `}</span>500 OG PFP characters
            play a crucial role in the ownership of the ecosystem. They help in
            value accrual to their holder by acting as a reward multiplier.
          </p>
        </li>
        <li>
          <p className="mb-5">
            <span className="font-bold">Chakra 10k</span>
            <span className="text-red-ff0">{` -> `}</span>10k 3D characters
            functional in gaming. They are a notch lower in tier than Chieftain
            NFT and are aimed at a wider audience of the ecosystem. Their value
            accrual as a multiplier is comparatively lower.
          </p>
        </li>
        <li>
          <p className="mb-5">
            <span className="font-bold">Gems</span>
            <span className="text-red-ff0">{` -> `}</span> These tokens are
            limited to in-game purchases and act as a Fiat on-ramp. Gems can be
            bought with USD (credit card/ fiat on-ramp). They cannot be swapped
            from GEM to CHAKRA tokens or vice-versa
          </p>
        </li>
        <li>
          <p className="mb-10">
            <span className="font-bold">Chakra Points (CP)</span>
            <span className="text-red-ff0">{` -> `}</span>CP measures the value
            a user adds to the protocol. Provides waiting list priority for
            early access privileges. Used as a metric in algorithms determining
            seasonal airdrop rewards and other functions.
          </p>
        </li>
      </ul>

      <h4
        className="font-marco font-semibold text-white mb-10"
        id="revenue-generation"
      >
        Revenue Generation
      </h4>

      <p className="mb-6">
        {`Chakra's`} main source of revenue comes from the fees charged for its
        services & virtual asset sales. The table below outlines the fees
        charged by Chakra Ecosystem through it’s public goods.
      </p>

      <p className="mb-10">
        <i>Revenue generated through services- goes to revenue pool.</i>
      </p>

      <figure className="mb-10">
        <img className=" w-1/4" src="/images/litepaper/table-1.svg" alt="" />
      </figure>

      <p className="mb-6">Other Revenue Streams (100%)- Goes to Treasury</p>

      <ol>
        <li>
          <p>NFT sales - Characters, items, cosmetics, skins, passes</p>
        </li>
        <li>
          <p>Gem Sales - Fiat users</p>
        </li>
        <li>
          <p>Loot [Mystery Box] & Loot Rerolls</p>
        </li>
      </ol>

      <h4
        className="font-marco font-semibold text-white mb-10"
        id="stakeholders"
      >
        Stakeholders
      </h4>

      <ol>
        <li className="mb-10">
          <p className="mb-6">
            <span className="font-bold">Game Players</span>
            <span className="text-red-ff0">{` -> `}</span>
            <span>
              Game players are individuals who play games within the Chakra
              ecosystem. They are a vital stakeholder within the Chakra
              ecosystem as they drive engagement and commerce within the
              platform.
            </span>
          </p>
        </li>
        <li className="mb-10">
          <p className="mb-6">
            <span className="font-bold">Game developers</span>
            <span className="text-red-ff0">{` -> `}</span>
            <span>
              Game developers are individuals or entities that create games for
              the Chakra ecosystem. They play a crucial role in expanding the
              platform and driving adoption.
            </span>
          </p>
        </li>
        <li className="mb-10">
          <p className="mb-6">
            <span className="font-bold">Traders</span>
            <span className="text-red-ff0">{` -> `}</span>
            <span>
              Traders are individuals who trade tokens and NFTs within the
              Chakra ecosystem. They play a crucial role in driving commerce and
              mobilizing liquidity within the platform.
            </span>
          </p>
        </li>
        <li className="mb-10">
          <p className="mb-6">
            <span className="font-bold">Content Creators</span>
            <span className="text-red-ff0">{` -> `}</span>
            <span>
              Content Creators are individuals who create content like game
              assets, skins, game environments, character designs, models, etc
              for the Chakra ecosystem. They play a crucial role in the
              expansion of the chakra ecosystem as game developers can buy this
              content to develop new games.
            </span>
          </p>
        </li>
      </ol>

      <h4
        className="font-marco font-semibold text-white mb-10"
        id="ecosystem-birds-view"
      >
        Ecosystem [{`Bird's-eye view`}]
      </h4>

      <p className="mb-10">
        A comprehensive view of the system as a whole, to visualize the
        interrelationships between different parts
      </p>

      <figure className="mb-10">
        <img src="/images/litepaper/eco-1.png" alt="ecosystem" />
      </figure>

      <figure className="mb-10">
        <img
          className="w-full"
          src="/images/litepaper/eco-2.png"
          alt="ecosystem"
        />
        <figcaption className="text-white text-xs">
          Stakeholder Value Flow
        </figcaption>
      </figure>

      <h4
        className="font-marco font-semibold text-white mb-10"
        id="incentivization"
      >
        Incentivization
      </h4>
      <p className="mb-10">
        <span className="">
          This section outlines the guidelines for user interactions within the
          Chakra ecosystem. To achieve this objective, we have designed a set of
          incentives and mechanisms that encourage participation and growth.
          These measures include rewards for active engagement and clear
          communication channels. By adhering to these rules and taking
          advantage of the {`ecosystem's`} features, users can contribute to the
          development of a vibrant and inclusive community.
        </span>
      </p>

      <p className="mb-6">
        <span className="font-bold underline">Rewards</span>
        <i>{` `}(for network participation)</i>
      </p>

      <p className="mb-4">Rewards are offered in the following forms:</p>

      <ol>
        <li>
          <p className="mb-2">Liquid Provision (or Staking) rewards</p>
        </li>
        <li>
          <p className="mb-2">Seasonal Airdrops</p>
        </li>
      </ol>

      <ul className="text-white list-decimal pl-5">
        <li>
          <p className="mb-6">
            <span className="font-bold">Staking Reward</span>
            <span className="text-red-ff0">{` -> `}</span>
            <span className="">
              A substantial % of Revenue Pool will be allocated to liquidity
              providers (and stakers), with the remaining going to the
              {`protocol's`} treasury. Additionally, a portion of token supply
              will be allocated to reward liquidity providers to encourage a
              rich market depth.
            </span>{" "}
          </p>
        </li>
        <li>
          <p className="mb-6">
            <span className="font-bold">Seasonal Airdrops</span>
            <span className="text-red-ff0">{` -> `}</span>
            <span className="">
              [Airdrops are composed of Tokens and Loot {`(virtual assets] ->`}{" "}
              Rewards are distributed in a series of seasons to continually
              incentivize network participation. The reward distribution is
              strategic and gamified, aligning with the {`protocol's`} gaming
              theme. The Chakra incentive system is inspired by Nir {`Eyal's`}{" "}
              Hook Model and Sequential Airdrops pioneered by Blur NFT
              Marketplace.
            </span>{" "}
          </p>
        </li>
      </ul>

      <p className="mb-10">
        <i>
          The <span className="underline">Sequential Airdrop Model</span>{" "}
          promotes market growth in two ways: it allows network development in
          stages that align with supply and demand growth, and it keeps users
          engaged by providing access to newly launched product features.
        </i>
      </p>

      <p className="font-semibold mb-10">
        <i>Airdrops are composed of Tokens and Loot (virtual assets)</i>
      </p>

      <p className="font-semibold text-white mb-6" id="distribution-process">
        <span className="underline">Distribution Process</span>
      </p>

      <ul className="text-white pl-5 list-disc">
        <li>
          <p className="mb-4">
            <span className="font-bold"> Announce Airdrop </span>
            <span className="text-red-ff0">{` -> `}</span>
          </p>
        </li>
      </ul>

      <p className="mb-6">
        This announcement motivates users to interact with the platform to
        generate CP, which measures the value a user adds to the protocol.
      </p>

      <ul className="text-white pl-5 list-disc">
        <li>
          <p className="mb-4">
            <span className="font-bold">Treasure Chest NFT Airdrop</span>
            <span className="text-red-ff0">{` -> `}</span>
          </p>
        </li>
      </ul>

      <p className="mb-6">
        The Treasure Chest NFT is distributed to all users who generated up to
        the minimum required CP for Airdrop. Player now have two choices.
      </p>

      <ul className="text-white list-disc pl-10 mb-8">
        <li>
          <p>Cash out the reward instantly by burning chakra points</p>
        </li>
        <li>
          <p>
            Stick around and receive a treasure chest which will then accrue
            higher rewards towards the end of the seasons
          </p>
        </li>
      </ul>

      <ul className="text-white pl-5 list-disc">
        <li>
          <p className="mb-4">
            <span className="font-bold">
              Use the Chest to Accrue Chakra Points (CP){" "}
            </span>
            <span className="text-red-ff0">{` -> `}</span>
            <span></span>
          </p>
        </li>
      </ul>

      <p className="mb-6">
        All CPs accrued are boosted by the tier value of each chest. What chests
        you receive would again be based on your interaction with the ecosystem
        and the existing CP you hold.
      </p>

      <ul className="text-white pl-5 list-disc">
        <li>
          <p className="mb-4">
            <span className="font-bold">CHAKRA Airdrop</span>
            <span className="text-red-ff0">{` -> `}</span>
          </p>
        </li>
      </ul>

      <p className="mb-10">
        At the end of each season, airdrops are distributed proportionally to
        stakeholders based on their CP holding. The {`protocol's`} CPs and
        treasure chest NFT are burned to redeem CHAKRA tokens. Points are reset
        at the end of each season, and all airdrop tokens are vested.
      </p>

      <p className="mb-6">
        <span className="font-bold underline">User Reward Share</span>
        {` `}(Formula)
      </p>

      <p className="mb-6">
        To determine a {`user's`} reward share, a square root pro-rata
        distribution formula is used. This formula calculates the ratio of the
        square root of the {`user's`} CP to the square root of the total CP
        earned by all users.
      </p>

      <p className="mb-6">
        By taking the square root of the CP earned, the formula compresses the
        range of values, reducing the impact of whales and ensuring that rewards
        are distributed equitably.
      </p>

      <figure>
        <img className="mb-12" src="/images/litepaper/dp-1.svg" alt="" />
      </figure>

      <p className="mb-6">
        <i>Defining the above variables</i>
      </p>

      <figure>
        <img className="mb-12" src="/images/litepaper/dp-2.svg" alt="" />
      </figure>

      <p className="mb-6">
        <span className="font-bold underline">Treasure Chest Design (WIP)</span>
      </p>

      <p className="mb-6">
        This mechanism gamifies CP redemption by incentivizing users willing to
        stay invested in the ecosystem for longer timeframes.
      </p>
      <p className="mb-10">
        There are four types of treasury chests, each with varying properties,
        as outlined below:
      </p>

      <figure>
        <img className="mb-10" src="/images/litepaper/dp-3.svg" alt="" />
      </figure>

      <p className="mb-12">
        <i>Note: The tiers will be defined in the near future</i>
      </p>

      <p className="mb-6">
        <span className="font-bold underline">
          Defining User Actions Reward
        </span>
      </p>

      <p className="mb-6">
        Listed below are the action sets that qualify for rewards and their
        associated Chakra points
      </p>

      <p className="mb-6">
        <span className="font-bold">
          <i> Value of Action and Reward per Unit Action</i>
        </span>
      </p>
      <figure>
        <img className="mb-12" src="/images/litepaper/dp-4.svg" alt="" />
      </figure>

      <p className="mb-10">
        <i>
          Note: The full set of actions and their point rewards will be defined
          in the near future
        </i>
      </p>

      <p className="mb-6">
        <span className="font-bold">
          Grouping rewardable actions by Sectors and Economic structure
        </span>
      </p>
      <figure>
        <img className="mb-12" src="/images/litepaper/dp-5.svg" alt="" />
      </figure>

      <p className="mb-4">
        <span className="font-bold underline">Airdrop Distribution Design</span>
      </p>

      <p className="mb-12">
        <span className="">
          We plan to continuously incentivize user participation through a
          gamified seasonal reward system throughout the project{`'s`} lifetime.
          The first season will be powered by the initial token allocation,
          which will serve as a blueprint for future seasons. Subsequent seasons
          will be fuelled by the protocol{`'s`} revenue. To ensure sufficient
          revenue for the project{`'s`} development, there will be a minimum
          12-month gap between successive seasons.
        </span>
      </p>

      <p className="mb-4">
        <span className="font-bold">
          Order of Incentivized Action Sets for Season I [subject to change]
        </span>
      </p>

      <ul className="list-disc text-white pl-5 mb-12">
        <li className="mb-3">
          <p>
            <span className="font-semibold">Set I</span>
            <span className="text-red-ff0">{` -> `}</span> Social sharing
          </p>
        </li>
        <li className="mb-3">
          <p>
            <span className="font-semibold">Set II</span>
            <span className="text-red-ff0">{` -> `}</span>
            General DeFi and GameFi user
          </p>
          <ul className="text-white pl-5">
            <li>
              <p>a. Reward for existing web3 users (gamers and DeFi users)</p>
            </li>
            <li>
              <p>
                b. To claim the reward, users have to engage with the Chakra
                ecosystem)
              </p>
            </li>
          </ul>
        </li>
        <li className="mb-3">
          <p>
            <span className="font-semibold">Set III</span>
            <span className="text-red-ff0">{` -> `}</span>
            Supply side action
          </p>
          <ul className="text-white pl-5">
            <li>
              <p>
                a. Incentivize actions in supply row of the reward grouping
                table
              </p>
            </li>
          </ul>
        </li>
        <li className="mb-3">
          <p>
            <span className="font-semibold">Set IV</span>
            <span className="text-red-ff0">{` -> `}</span>
            Demand side action
          </p>
          <ul className="text-white pl-5">
            <li>
              <p>
                a. Incentivize actions in supply row of the reward grouping
                table
              </p>
            </li>
          </ul>
        </li>
      </ul>

      <h3 className="font-marco font-semibold text-red-ff0 mb-10" id="pitch">
        Investors Pitch
      </h3>

      <h4
        className="font-marco font-semibold text-white mb-10"
        id="distribution-and-supply"
      >
        Distribution and Supply
      </h4>

      <p className="mb-6">
        <span className="font-bold underline">Economy Balancing</span>
      </p>

      <p className="mb-6">
        <span className="">
          This plays a pivotal role in enabling the {`"Play and Earn"`}{" "}
          paradigm, where users can earn real value through NFT assets,
          currencies, and tokens. Achieving this objective requires balancing
          the {`economy's`} rules and market, with a focus on increasing the
          real value earned by users.
        </span>
      </p>

      <p className="mb-10">
        <span className="">
          Our approach involves modeling, simulating, and analyzing the system
          and its parts to maintain a balance between inflationary and
          deflationary pressures.
        </span>
      </p>

      <p className="mb-4">
        <span className="font-bold underline">Token Allocation</span>
      </p>

      <p className="mb-6">
        <span className="underline mr-1">
          <a
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1SqtWn-jw5gOK3XHktV3-T3YdC0Kisvr4Zrrrj4oJMkY/edit?usp=sharing"
            rel="noopener noreferrer"
          >
            Click here
          </a>
        </span>
        to access the token allocation sheet.
      </p>

      <figure className="mb-10">
        <img
          className="w-full"
          src="/images/litepaper/token-1.png"
          alt="token allocation"
        />
        <figcaption className="text-white text-xs capitalize">
          token allocation
        </figcaption>
      </figure>

      <figure className="mb-10">
        <img
          className="w-full"
          src="/images/litepaper/token-2.png"
          alt="token supply"
        />
        <figcaption className="text-white text-xs capitalize">
          Token Supply Curve
        </figcaption>
      </figure>
      <figure className="mb-10">
        <img
          className="w-full"
          src="/images/litepaper/token-3.png"
          alt="token vesting"
        />
        <figcaption className="text-white text-xs capitalize">
          token vesting
        </figcaption>
      </figure>

      <h4
        className="font-marco font-semibold text-white mb-10"
        id="how-to-moon"
      >
        How to Moon
      </h4>
      <figure>
        <img
          className="mb-10 w-full"
          src="/images/litepaper/11.png"
          alt="how to moon"
        />
      </figure>

      <p className="mb-6">
        Below are important considerations and principles being implemented to
        create a longterm sustainable economy while also driving player adoption
        and retention- learning from industry successes and failures.
      </p>

      <p className="mb-4">
        <span className="font-bold underline">Flywheel</span>
      </p>

      <p className="mb-6">
        The Chakra ecosystem aims to create a robust flywheel effect by
        synergistically combining elements of web3, gaming, collaborative
        storytelling, and community involvement. The ecosystem focuses on three
        main pillars: Content, Commerce, and Expansion, which work together to
        maximize utility, drive adoption, and ensure sustainable growth.
      </p>

      <p className="mb-4">
        <span className="font-bold underline">Leveraging web3</span>
      </p>

      <p className="mb-6">
        Web3 sets the stage for a self-sovereign financial system, an open
        contributor/creator economy, and a universal digital representation and
        ownership layer via NFTs.
      </p>

      <ul className="text-white mb-10">
        <li className="mb-2">
          <p>
            <span className="text-red-ff0 text-lg">{` ◇ `}</span>
            <strong>Utilizing NFTs </strong>
            to establish verifiable digital ownership, enable seamless
            transferability, and create unique identifiers for enhanced gaming
            experiences.
          </p>
        </li>
        <li className="mb-4">
          <p>
            <span className="text-red-ff0 text-lg">{` ◇ `}</span>
            <strong>Employing Fungible Tokens</strong> to equitize participants
            within the ecosystem, incentivize desired behaviors, and provide a
            native unit of account for commerce and value capture.
          </p>
        </li>
        <li className="mb-4">
          <p>
            <span className="text-red-ff0 text-lg">{` ◇ `}</span>
            <strong>Leveraging DeFi and decentralized governance</strong> to
            create a transparent, accessible, and self-regulating ecosystem.
          </p>
        </li>
      </ul>

      <ul>
        <li className="mb-10">
          <p className="mb-4">
            <span className="font-bold">1. Clear Tokenomics</span>
            <span className="text-red-ff0">{` ->`}</span>
          </p>

          <p className="mb-4">
            {`Chakra's`} tokenomics is explicitly designed to be comprehensible
            & transparent. The token supply, emissions schedule, and fee
            structure will be delineated, ensuring that all stakeholders have a
            clear understanding of the {`ecosystem's`} financial dynamics. The
            unlocks are timed to enhance the long-term sustainability of the
            ecosystem, balancing immediate rewards with future growth.
          </p>

          <p className="mb-4">
            Our guiding principle is synergy – all aspects of our tokenomics is
            designed to reinforce and enhance the operation of our{" "}
            {`ecosystem's`}
            flywheel.
          </p>
        </li>
        <li className="mb-10">
          <p className="mb-4">
            <span className="font-bold">2. Real Yield</span>
            <span className="text-red-ff0">{` ->`}</span>
          </p>

          <p className="mb-4">
            This plays a pivotal role in enabling the {`"Play and Earn"`}{" "}
            paradigm, where users can earn real value through NFT assets and
            tokens. To this end, we implement a nuanced balance of economic
            rules and market dynamics.
          </p>

          <p className="mb-4">
            Using modeling, simulation, and analysis, we maintain an equilibrium
            between inflationary and deflationary pressures, ensuring that user
            & ecosystem earnings remain valuable and sustainable.
          </p>
        </li>
        <li className="mb-10">
          <p className="mb-4">
            <span className="font-bold">
              3. Gamified Incentivization & Reward Mechanisms
            </span>
            <span className="text-red-ff0">{` ->`}</span>
          </p>

          <p className="mb-4">
            <i>
              “Good Institutions align Self-Interest with the Social Interest”
            </i>
          </p>

          <p className="mb-4">
            Chakra ecosystem aligns user behavior with beneficial outcomes for
            the ecosystem as a whole by incentivizing desired behaviors. Drawing
            on Nir
            {`Eyal's`} Hook Model, {`we've`} devised a cyclical system that
            triggers user engagement, rewards action, and encourages
            reinvestment into the ecosystem.
          </p>

          <p className="mb-4">
            We plan continuously incentivize network participation through a
            gamified seasonal reward system. The first season will be powered by
            the initial token allocation, which will serve as a blueprint for
            future seasons. Subsequent seasons will be fueled by a combination{" "}
            {`ecosystems's`}
            revenue & token supply. To ensure sufficient revenue for the{" "}
            {`project's`}
            development, there will be a minimum gap between successive seasons.
          </p>
          <p className="mb-4">
            This alignment of self-interest with the social interest ensures
            that the ecosystem remains vibrant, active, and growing.
          </p>
        </li>
        <li className="mb-10">
          <p className="mb-6">
            <span className="font-bold">
              4. Collaborative World-building & Immersive Gaming
            </span>
            <span className="text-red-ff0">{` ->`}</span>
          </p>

          <p className="mb-6">
            The Chakra ecosystem flourishes on community participation. Each
            game and content piece contributes to an unfolding narrative,
            allowing for long-term development and ongoing story arcs. We
            provide free-to-play experiences for frictionless onboarding.
            Inspired by shared storytelling modules like DnD, we allow users to
            actively participate in the narrative, contributing to a dynamic,
            evolving world.
          </p>

          <p className="mb-6">
            Gaming is the intersection of mind-blowing art & bleeding-edge tech,
            entertainment & engineering, immersion & interaction. The gaming
            thesis for crypto is extremely bullish. {`It's`} the lowest hanging
            bonafide fruit to onboard the next 100 million users to web3
          </p>
        </li>
        <li className="mb-10">
          <p className="mb-6">
            <span className="font-bold">5. Virtuous Economy Design</span>
            <span className="text-red-ff0">{` ->`}</span>
          </p>

          <p className="mb-6">
            {`Chakra's`} economy is designed with a virtuous cycle at its core.
            NFTs and tokens enhance the user experience and are distributed
            through gameplay and network participation, creating inherent value.
            The economic engine is powered by both inherent value from utility
            and speculative value from adoption and scarcity of resources. Our
            aim is to maximize inherent value for virtual assets while creating
            a robust framework for adoption and expansion. This virtuous cycle
            design drives the success of our
            {`"token go up"`} objective, laying the foundation for a prosperous
            and sustainable ecosystem.
          </p>

          <p className="mb-10">
            Fiat and non-crypto onramps ensure accessibility for all users.
          </p>
        </li>
      </ul>

      <h4 className="font-marco font-semibold text-white mb-10" id="disclaimer">
        Disclaimer
      </h4>
      <p className="mb-6">
        <span className="text-red-ff0">
          This white paper is published by illiquid labs for informational
          purposes only.
        </span>{" "}
      </p>
      <p className="mb-6">
        <span className="text-white">
          The information contained in this document is confidential and
          proprietary to illiquid labs. The contents of this document are
          subject to change without notice. This document may contain
          trademarks, copyrights, and other intellectual property rights
          belonging to illiquid labs.
        </span>{" "}
      </p>
      <p className="mb-6">
        <span className="text-white">Date: Feb 1st 2023</span>{" "}
      </p>
      <p className="mb-6">
        <span className="text-white">
          Parties: illiquid labs is the owner of the rights to the intellectual
          property described in this white paper.
        </span>{" "}
      </p>
      <p className="mb-6">
        <span className="text-white">
          Business Description: illiquid labs is a gaming studio that
          specializes in the development of high-quality video games.
        </span>{" "}
      </p>
      <p className="mb-6">
        <span className="text-white">
          IP Description: The intellectual property described in this white
          paper includes the game concept, gameplay mechanics, graphics, music,
          and all other aspects of the game known as Chakra.
        </span>{" "}
      </p>
      <p className="mb-6">
        <span className="text-white">
          Terms: Illiquid labs retains all ownership rights to the intellectual
          property described in this white paper. No part of the intellectual
          property may be used, reproduced, or distributed without the prior
          written consent of illiquid labs. Any use, reproduction, or
          distribution without prior written consent will be considered an
          infringement of illiquid {`labs'`} intellectual property rights and
          may result in legal action.
        </span>{" "}
      </p>
      <p className="mb-6">
        <span className="text-white">
          Provisions: This disclaimer does not constitute a waiver of any of
          illiquid {`labs'`} rights under copyright law or any other applicable
          law. illiquid labs reserves the right to take legal action to protect
          its intellectual property rights, including seeking injunctive relief,
          damages, and {`attorneys'`} fees. illiquid labs also reserves the
          right to amend this disclaimer in writing at any time.
        </span>{" "}
      </p>
      <p className="mb-6">
        <span className="text-white">
          By accessing this white paper, you agree to be bound by the terms and
          conditions set forth in this disclaimer. If you do not agree to these
          terms and conditions, you should not access or use this white paper.
        </span>{" "}
      </p>
    </StyledLitePaperArticle>
  );
};

export default LitepaperArticle;
