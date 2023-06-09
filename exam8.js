// ESM 방식으로만 동작하는 외부 CLI 라이브러리
import inquirer from 'inquirer';

// inquirer 라이브러리의 .prompt()메서드는 프로미스를 반환하도록 작성되어있다.
// then()메서드로 입력 받은 데이터를 전달할 수 있다.

function exampleOne(array){
  let suffledArray=[];
// Q1 랜덤으로 배열의 인덱스를 셔플(섞어)내는 함수 로직 작성
// 단, 마지막 confirmd은 항상 마지막 인덱스여야 한다.
return suffledArray;
}
/* Q2 아래에 작성된 .prompot()는 인자로 배열을 요구하므로, 위의 작성한 exampleOne을 활용하여 입력 데이터를 실행할 때마다 섞어 출력하도록 한다.
공부법으로 유명한 flash card의 주요 코어로직이다.  */

inquirer
.prompt([
{
  type:'input',
  name:'name',
  massage:"당신의 이름은 무엇입니까?",
},
{
  type:'list',
  name:'like food',
  message:'당신이 좋아하는 음식은 무엇입니까?',
  choices:['바나나우유','딸기우유','초코우유','그냥우유'],
},
{
  type:'confirm',
  name:'confirm',
  message:'확실합니까?',
},
])
.then((answers)=>{
  console.log('Anwers:',answers);
});