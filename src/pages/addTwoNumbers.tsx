import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
const inter = Inter({ subsets: ['latin'] });

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function Home() {
  const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    let curr1 = l1;
    let curr2 = l2;
    const result: ListNode | null = new ListNode(0, null);
    let resultTracker = result;

    while (curr1 || curr2) {
      const sum = (curr1 ? curr1.val : 0) + (curr2 ? curr2.val : 0);
      if (resultTracker.val + sum >= 10) {
        resultTracker.val = resultTracker.val + sum === 10 ? 0 : resultTracker.val + (sum % 10);
        resultTracker.next = new ListNode(1, null);
      } else {
        resultTracker.val += sum;
        resultTracker.next = curr1 && curr1.next !== null && curr2 && curr2.next !== null ? new ListNode(0, null) : null;
      }

      curr1 = curr1 !== null ? curr1.next : null;
      curr2 = curr2 !== null ? curr2.next : null;

      resultTracker = resultTracker.next !== null ? resultTracker.next : resultTracker;
    }
    return result;
  };

  const convertListToArray = (list: ListNode | null): number[] => {
    const resultArray: number[] = [];
    let current = list;
    while (current !== null) {
      resultArray.push(current.val);
      current = current.next;
    }
    return resultArray;
  };

  const convertArrayToList = (array: number[]): ListNode => {
    let resultListNode: ListNode = new ListNode();
    let cur: ListNode = resultListNode;

    array.forEach((value: number) => {
      cur.next = new ListNode(value, null);
      cur = cur.next;
    });

    resultListNode = resultListNode.next ?? new ListNode();

    return resultListNode;
  };

  const dataSets: Array<{ l1: ListNode | null; l2: ListNode | null }> = [
    { l1: convertArrayToList([2, 4, 3]), l2: convertArrayToList([5, 6, 4]) },
    { l1: convertArrayToList([0]), l2: convertArrayToList([0]) },
    { l1: convertArrayToList([9, 9, 9, 9, 9, 9, 9]), l2: convertArrayToList([9, 9, 9, 9]) },
  ];

  const [index, setIndex] = useState(0);
  const [l1, setL1] = useState(dataSets[0].l1);
  const [l2, setL2] = useState(dataSets[0].l2);
  const [resultArray, setResultArray] = useState<number[]>(convertListToArray(addTwoNumbers(l1, l2)));

  useEffect(() => {
    const result = addTwoNumbers(l1, l2);
    const resultArray = convertListToArray(result);
    setResultArray(resultArray);
  }, [l1, l2]);

  const rotateDataSet = () => {
    const nextIndex = (index + 1) % dataSets.length;
    setL1(dataSets[nextIndex].l1);
    setL2(dataSets[nextIndex].l2);
    setIndex(nextIndex);
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-black">Add Two Numbers</h1>
      <h2 className="text-black">Data Sets</h2>
      <div className="flex flex-row space-x-4">
        <p>[{convertListToArray(l1).toLocaleString()}]</p>
        <p>[{convertListToArray(l2).toLocaleString()}]</p>
      </div>
      <Button className="m" variant="contained" onClick={rotateDataSet}>
        Next data set
      </Button>
      <ul className="flex flex-row justify-between items-center space-x-2">
        {resultArray.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </main>
  );
}
