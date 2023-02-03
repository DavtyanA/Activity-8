import React, { useState } from 'react';
import {
  Button,
  GridItem,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Tag,
} from '@chakra-ui/react';
import { POSSIBLE_COURSES } from '../types/gentrans';
import { addGrade } from '../lib/client';

export function NewGradeForm() {
  const [newGrade, setNewGrade] = useState<number>(0);
  const [course, setCourse] = useState<string>('');
  const [studentID, setStudentID] = useState<number>(0);
  return (
    <>
      <GridItem w='100%' h='100%' colSpan={1}>
        <div>
          <Tag>Add Grade</Tag>
          <Stack spacing={6}>
            <Select
              placeholder='Select option'
              onChange={option => {
                setCourse(option.target.value);
              }}>
              {POSSIBLE_COURSES.map(currentCourse => (
                <option value={currentCourse} key={currentCourse}>
                  {currentCourse}
                </option>
              ))}
            </Select>
            <Input
              variant='outline'
              placeholder='Student ID'
              onChange={option => {
                setStudentID(parseInt(option.target.value));
              }}
            />
          </Stack>
        </div>
      </GridItem>
      <GridItem w='100%' h='100%' colSpan={1}>
        <br />
        <Stack spacing={6}>
          <NumberInput
            onChange={value => {
              setNewGrade(parseInt(value));
            }}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button
            colorScheme='green'
            onClick={() => {
              addGrade(studentID, course, newGrade);
              console.log('Add Toast Here!');
            }}>
            Add Grade
          </Button>
        </Stack>
      </GridItem>
    </>
  );
}
