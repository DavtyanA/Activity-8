import React, { useState } from 'react';
import { GridItem, Tag, Stack, Input, Button } from '@chakra-ui/react';
import { addStudent } from '../lib/client';

export function NewStudentForm() {
  const [studentName, setStudentname] = useState<string>('');
  return (
    <GridItem w='100%' h='100%' colSpan={1}>
      <div>
        <Tag>Add Student</Tag>
        <Stack spacing={3}>
          <Input
            variant='outline'
            placeholder='Student Name'
            onChange={e => {
              setStudentname(e.target.value);
            }}
          />
        </Stack>
        <br />
        <Button
          colorScheme='green'
          onClick={() => {
            console.log(studentName);
            const name = addStudent(studentName);
            console.log(name);
          }}>
          Add Student
        </Button>
      </div>
    </GridItem>
  );
}
