import Link from 'next/link';
import React from 'react'
import tw from "tailwind-styled-components"


const Search = () => {
  return (
    <Wrapper>
        {/* button */}
        <ButtonContainer>
            <Link href={"/"}>
                <BackButton src="https://cdn-icons-png.flaticon.com/512/3415/3415823.png"/>
            </Link>
        </ButtonContainer>

        {/* input container */}
        <InputContainer>
            <FrontToIcons>
                <Circle src="https://cdn-icons-png.flaticon.com/512/481/481078.png" />
                <VerticalLine src="https://cdn-icons-png.flaticon.com/512/649/649686.png"/>
                <Circle src="https://cdn-icons-png.flaticon.com/512/649/649768.png" />
            </FrontToIcons>

            <InputBoxes>
                <Input placeholder='Enter pickup location' />
                <Input placeholder='Where to?'/>
            </InputBoxes>
            <PlusIcon src="https://cdn-icons-png.flaticon.com/128/992/992651.png"/>
        </InputContainer>

        {/* save places */}
        <SavedPlaces>
            <StarIcon src="https://t3.ftcdn.net/jpg/01/09/84/42/240_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg"/>
            Saved Places
        </SavedPlaces>

        {/* confirm btn */}
        <ConfrimLocation>
            <Link href={"/confirm"}>
                <ConfirmButton>Confirm Location</ConfirmButton>
            </Link>
        </ConfrimLocation>

    </Wrapper>
  )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4
`

const BackButton = tw.img`
 h-12 transform hover:scale-105 transition
`

const InputContainer = tw.div`
bg-white px-4 flex items-center
`

const FrontToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`

const Circle = tw.img`
h-2.5
`

const VerticalLine = tw.img`
h-full
`

const InputBoxes = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded p-2 outline-none border-none
`

const PlusIcon = tw.img`
 w-10 h-10 bg-gray-200 rounded-full ml-3 
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
w-10 h-10 rounded-full bg-gray-400 mr-2
`

const ConfrimLocation  = tw.div`
flex m-4
`

const ConfirmButton = tw.button`
 bg-black text-white flex-1 py-3 rounded
`