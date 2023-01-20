import Link from "next/link";
import tw from "tailwind-styled-components"
import Map from "../components/Map";

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* header */}
        <Header>
          <Uberlogo src="https://i.ibb.co/84stgjq/uber.png"/>
          <Profile>
            <Name>May Thu Aung</Name>
            <UserImg src="https://i.ibb.co/84stgjq/uber.png"/>
          </Profile>
        </Header>

        {/* Actions Buttons */}
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/YDYMKny/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>

        {/* InputButton */}
        <InputButton>Where To?</InputButton>
        
      </ActionItems>
    </Wrapper>
    
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const Uberlogo = tw.img`
 h-28
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-26 text-sm
`;

const UserImg = tw.img`
  h-12 w-12 rounded-full border-gray-400 p-px
`;

const Header = tw.div`
  flex justify-between items-center
`;


const ActionButtons = tw.div`
  flex justify-between
`
const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg 
  transform hover:scale-y-105 transition text-xl
`

const ActionButtonImage = tw.img`
 h-3/5
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`