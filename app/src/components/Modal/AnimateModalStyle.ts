import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalBox = styled(motion.div)`
  padding: 2rem;
  position: relative;
  z-index: 2;
  margin-top: 5rem;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;

