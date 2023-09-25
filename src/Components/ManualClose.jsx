import Form from './Form'

import { GlobalProvider } from '../Context'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'


export default function ManualClose() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
      
      
        <Button
        w="80px" h="50px" borderRadius="20px" bg="white" border="1px solid silver" fontSize="20px" _hover={{backgroundColor:"black",color:"white"  }}
        onClick={onOpen}>Login</Button>
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div >
              <Form />
              </div>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </>
    )
  }