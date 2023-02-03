import React from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  Editable,
  EditablePreview,
  EditableInput,
  useToast,
} from '@chakra-ui/react';
import { CourseGrade } from '../types/transcript';

export function GradeView({ grade }: { grade: CourseGrade; studentID: number }) {
  const toast = useToast();
  return (
    <Stat>
      <StatLabel>{grade.course}</StatLabel>
      <StatNumber>
        <Editable
          defaultValue={`${grade.grade}`}
          onSubmit={newValue => {
            toast({
              title: 'Grade Updated',
              description: `Grade updated to ${newValue}.`,
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
            console.log(`Want to update grade to ${newValue}`);
          }}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </StatNumber>
    </Stat>
  );
}
