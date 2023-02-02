import React from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  Editable,
  EditablePreview,
  EditableInput,
} from '@chakra-ui/react';
import { CourseGrade } from '../types/transcript';
import { updateGrade } from '../lib/client';

export function GradeView({ grade, studentID }: { grade: CourseGrade; studentID: number }) {
  return (
    <Stat>
      <StatLabel>{grade.course}</StatLabel>
      <StatNumber>
        <Editable
          defaultValue={`${grade.grade}`}
          onSubmit={newValue => {
            updateGrade(studentID, grade.course, Number(newValue));
            console.log(`Want to update grade to ${newValue}`);
          }}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </StatNumber>
    </Stat>
  );
}
