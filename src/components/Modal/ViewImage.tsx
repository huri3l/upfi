import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} size="6xl" onClose={onClose} isCentered>
      <ModalOverlay>
        <ModalContent>
          <ModalBody p={0}>
            <Image src={imgUrl} objectFit="contain" />
          </ModalBody>

          <ModalFooter
            h="32px"
            bgColor="pGray.800"
            justifyContent="flex-start"
            borderBottomRadius="6px"
            pl="10px"
          >
            <Link href={imgUrl} isExternal color="pGray.50">
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
