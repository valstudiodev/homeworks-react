import { TitleHomework, Subtitle, SubtitleTask } from "@/components/fonts/Fonts";
import { useState } from "react";
import React from 'react';
// import { Value } from "sass";

export default function Homework1(): React.JSX.Element {

  return (
    <div className="homework-container flex flex-col items-center gap-10">
      <TitleHomework number={1} />

      <div className="homework-preview-area flex flex-col items-center gap-6">
        {/* task 1 */}
        <SubtitleTask number={1} />
        <Homework1Task1 />

        {/* task 2 */}

        {/* task 3 */}
        <SubtitleTask number={3} />
        <Homework1Task3 />

        {/* task 4 */}
        <SubtitleTask number={4} />
        <BankAccount />

        {/* task 5 */}
        <SubtitleTask number={5} />
        <Homework1Task5 users={users} />


      </div>
    </div>
  );
}


// ==========================================


// ==========================================================================================================
// Задача 1. Вводиться кількість пасажирів. Вивести: скільки потрібно автобусів (кожен автобус на 20 місць)
// скільки пляшок води (кожному пасажиру 2 пляшки),скільки бутербродів (кожному пасажиру 3 бутерброди)
// ==========================================================================================================
type Resources = {
  amountOfWater: number;
  amountOfSandwiches: number;
  amountOfBuses: number;
};

function Homework1Task1(): React.JSX.Element {
  const [passengers, setPassengers] = useState<number | ''>('');
  const resources = getCalculateResources(passengers === '' ? 0 : passengers);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value

    if (value === '') {
      setPassengers('')
      return
    }
    const numValue = Number(value)
    setPassengers(numValue < 0 ? 0 : numValue);
  }

  return (
    <div className="p-4 border border-gray-700 rounded-lg bg-zinc-900/50 mb-6">

      <GenerateInput onChange={handleInputChange} passengers={passengers} />

      <RenderListResourses resources={resources} />

    </div>
  )
}
function getCalculateResources(passengers: number): Resources {
  return {
    amountOfBuses: Math.ceil(passengers / 20),
    amountOfWater: passengers * 2,
    amountOfSandwiches: passengers * 3,
  };
}
// =========== generate input =============
interface GenerateInputPassengers {
  passengers: number | '';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function GenerateInput({ onChange, passengers }: GenerateInputPassengers) {
  return (
    <input
      type="number"
      value={passengers}
      onChange={onChange}
      placeholder="Enter the amount of passenger"
      className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700 mb-4"
    />
  )
}
// =========== render list =============
interface ListResoursesProps {
  resources: Resources;
}
function RenderListResourses({ resources }: ListResoursesProps) {
  return (
    <ul className=" space-y-1 text-sm">
      <li className="flex items-center gap-2">
        <strong className="font-normal text-zinc-300">Buses:</strong>
        <span className="font-mono text-blue-400">{resources.amountOfBuses}</span>
      </li>
      <li className="flex items-center gap-2">
        <strong className="font-normal text-zinc-300">Water:</strong>
        <span className="font-mono text-blue-400">{resources.amountOfWater}</span>
      </li>
      <li className="flex items-center gap-2">
        <strong className="font-normal text-zinc-300">Sandwiches:</strong>
        <span className="font-mono text-blue-400">{resources.amountOfSandwiches}</span>
      </li>
    </ul>
  )
}


// ==========================================================================================================
// Задача 2. Вводиться номер місяця. Автоматично виводити рекомендований одяг (зима – пальто, літо – шорти ….). 
// Також автоматично виводити зображення з відповідним зображенням лісу (зима – ліс зі снігом, осінь – жовтий ліс, …).
// ==========================================================================================================






// ==========================================================================================================
// Задача 3. Задано початок та кінець діапазону. 
// При натисканні на кнопку випадковим чином генерувати значення з вказаного діапазону та відображати його.
// ==========================================================================================================
function Homework1Task3(): React.JSX.Element {
  const [min, setMin] = useState<number | ''>('')
  const [max, setMax] = useState<number | ''>('')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string>('')

  const handleGenerateClick = () => {
    if (min === '' || max === '') {
      setError('Please fill out both fields');
      return;
    }

    if (min > max) {
      setError('Min value can not be more max value')
      setResult(null)
      return
    }

    setError('')
    const randomResult = generateRandomNumber(min, max)
    setResult(randomResult)
  }

  return (
    <div className="p-4 border border-gray-700 rounded-lg bg-zinc-900/50 mb-6">
      <WrapInput label="Min:" value={min} onChange={setMin} placeholder="Enter first number" />
      <WrapInput label="Max" value={max} onChange={setMax} placeholder="Enter second number" />
      <GenerateButton label="Generate" onClick={handleGenerateClick} />

      {result !== null && <RenderResult label="Result" value={result} />}
      {error && <Error value={error} />}

    </div>
  )
}
function generateRandomNumber(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1))
}
// ============ wrap input+label ============
interface NumberInputProps {
  label: string;
  value: number | '';
  onChange: (value: number | '') => void;
  placeholder?: string;
}
function WrapInput({ label, value, onChange, placeholder = '0' }: NumberInputProps): React.JSX.Element {
  const inputId = React.useId();

  return (
    <div className="mb-4 flex items-center">
      <label htmlFor={inputId} className="mr-4 text-zinc-300 min-w-10">
        {label}
      </label>
      <input
        id={inputId}
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
        placeholder={placeholder}
        className="bg-zinc-800 rounded pl-2 text-white outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}
// =========== generate button ============
interface GenerateButtonProps {
  label: string;
  onClick: () => void;
}
function GenerateButton({ label, onClick }: GenerateButtonProps): React.JSX.Element {
  return (
    <button
      type="button"
      className="bg-blue-800 p-2 rounded-2xl 
      mb-2 cursor-pointer hover:bg-blue-500 
      transition duration-300"
      onClick={onClick}>
      {label}
    </button>
  )
}
// =========== render ===========
interface RenderResultProps {
  value: number | string;
  label: string;
}
function RenderResult({ value, label }: RenderResultProps): React.JSX.Element {
  return (
    <p className="bg-zinc-800 p-2 rounded mb-2">{label} {value}</p>
  )
}
// ========== error ==========
interface ErrorProps {
  value: string;
}
function Error({ value }: ErrorProps): React.JSX.Element {
  return (
    <p className="bg-red-700 p-4 rounded-2xl">{value}</p>
  )
}



// ==========================================================================================================
// Задача 4. “Рахунок у банку”
// Вимоги:
// 1) Спочатку сума дорівнює 0грн. Змінити суму у гривнях можна або зарахуванням на рахунок, або зняттям.
// 2) Сума автоматично переводиться у долари та євро (фіксований курс задається у data).
// 3) можливість зарахувати суму (контролювати, щоб не була від’ємною)
// 4) можливість зняти (щоб не можна зняти більше ніж є на рахунку)
// 5) при виконанні зняття і зарахування коштів вираховувати 3% від суми (відображати кількість відсотків автоматично)

// При зміні суми :
// - якщо було зняття, то суму відображати червоним
// - якщо було зарахування, то суму відображати зеленим
// Якщо сума валюти менша за 100 то відображати червоним кольором, інакше - зеленим
// ==========================================================================================================
const USD_RATE = 42
const EUR_RATE = 49
const COMMISSION_INTEREST = 0.03

type Operation = 'deposit' | 'withdraw' | null

interface InputProps {
  label: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
interface DepositButtonProps {
  title: string;
  onClick: () => void;
}
interface BalanceProps {
  title: string;
  value: number | string;
  currency: string;
}
interface WithdrawButtonProps {
  title: string;
  onClick: () => void;
}
interface CommissionProps {
  title: string;
  value: number;
  currency: string;
}

function BankAccount() {
  const [balance, setBalance] = useState<number>(50000)
  const [depositAmount, setDepositAmount] = useState<number | ''>('')
  const [withdrawAmount, setWithdrawAmount] = useState<number | ''>('')
  const [error, setError] = useState<string>('')
  const [lastOperation, setLastOperation] = useState<Operation>(null)
  const [activeAmount, setActiveAmount] = useState<number | ''>('')

  const handleDepositInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === '') {
      setDepositAmount('')
      return
    }

    const inputValue = Number(value)

    if (isNaN(inputValue) || inputValue < 0) {
      setDepositAmount('')
      return
    }
    setDepositAmount(inputValue)

    setActiveAmount(inputValue)
  }

  const handleWithdrawInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === '') {
      setWithdrawAmount('')
      return
    }

    const inputValue = Number(value)

    if (isNaN(inputValue) || inputValue < 0) {
      setWithdrawAmount('')
      return
    }
    setWithdrawAmount(inputValue)

    setActiveAmount(inputValue)
  }

  const handleDeposit = () => {
    if (Number(depositAmount) <= 0) {
      setError('Invalid amount')

      setTimeout(() => {
        setError('')
      }, 3000);

      return
    }

    setBalance(prev => prev + Number(depositAmount))

    setLastOperation('deposit')

    setTimeout(() => {
      setLastOperation(null)
    }, 3000);

    setDepositAmount('')
  }

  const handleWithdraw = () => {
    if (Number(withdrawAmount) <= 0 || Number(withdrawAmount) > balance) {
      setError('Invalid operation')

      setTimeout(() => {
        setError('')
      }, 3000);

      return
    }

    setError('')

    setBalance(prev => prev - Number(withdrawAmount))

    setLastOperation('withdraw')

    setTimeout(() => {
      setLastOperation(null)
    }, 3000);

    setWithdrawAmount('')
  }

  const calculateCommission = (amount: number | '') => {
    return Number(amount) * COMMISSION_INTEREST
  }

  const USD = balance / USD_RATE
  const EURO = balance / EUR_RATE

  return (
    <div className="bank-account justify-center p-4 border
    flex flex-col gap-4 border-gray-700 rounded-lg bg-zinc-900/50 mb-6">
      <Subtitle title="Bank Account Dashboard" />
      <Balance title="Balance" value={balance} currency="UAH" />
      <div className="bank-account__deposit flex flex-col gap-2">
        <Input label="Deposit to an account" value={depositAmount} onChange={handleDepositInputChange} placeholder="0" />
        <DepositButton title="Deposit" onClick={handleDeposit} />
      </div>
      <div className="bank-account__withdraw flex flex-col gap-2">
        <Input label="Withdraw from an account" value={withdrawAmount} onChange={handleWithdrawInputChange} placeholder="0" />
        <WithdrawButton title="Withdraw" onClick={handleWithdraw} />
      </div>
      <div className="bank-account__info flex flex-col gap-3">
        <CalculateCommisiion title="Commission:" value={calculateCommission(activeAmount || 0)} currency="UAH" />
        <BalanceUsd title="Sum in dollars:" value={USD.toFixed(2)} currency="$" />
        <BalanceEuro title="Sum in Euro:" value={EURO.toFixed(2)} currency="Euro" />
      </div>


      {error && <div className="bg-red-500/20 
      text-white p-3 rounded-lg font-bold 
      text-center border border-red-500/20">{error}</div>}
      {lastOperation === 'deposit' &&
        (<div className="bg-emerald-500/10 rounded-lg
      text-white p-3 font-bold border border-emerald-500/30
      text-center">Deposit successful</div>)}
    </div>
  )

}
// ============= INPUT =============
function Input({ label, value, onChange, placeholder = '0' }: InputProps): React.JSX.Element {
  const inputId = React.useId()

  return (
    <div className="flex justify-between items-center gap-2 font-semibold">
      <label htmlFor={inputId} className="mr-4 text-zinc-300 min-w-10">
        {label}
      </label>
      <input type="number"
        id={inputId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-zinc-800 rounded-lg pl-2 
        text-white outline-none focus:ring-1 
        focus:ring-blue-500/30 p-2
        focus:border-blue-500"
      />
    </div>
  )
}
// ============= DepositButton =============
function DepositButton({ title, onClick }: DepositButtonProps): React.JSX.Element {
  return (
    <button className="bg-blue-800 p-2 rounded-2xl 
      cursor-pointer hover:bg-blue-500 
      transition duration-300 w-full font-medium"
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
// ============= WithdrawButton =============
function WithdrawButton({ title, onClick }: WithdrawButtonProps): React.JSX.Element {
  return (
    <button className="bg-blue-500 p-2 rounded-2xl 
      cursor-pointer hover:bg-blue-400 
      transition duration-300 w-full font-medium"
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
// ============= Balance =============
function Balance({ title, value, currency }: BalanceProps): React.JSX.Element {
  return (
    <p className="flex gap-4 justify-center
      text-zinc-300 items-center p-3
      text-xl bg-zinc-900 border border-zinc-800
      bordered">
      {title}
      <span className="text-blue-400 font-semibold">{value}</span> {currency}
    </p>
  )
}
// ============= BalanceUsd =============
function BalanceUsd({ title, value, currency }: BalanceProps): React.JSX.Element {
  return (
    <p className="text-zinc-300 rounded-md
    bg-zinc-800/60 border border-zinc-700
     text-sm p-2 flex gap-3 items-center">
      {title}
      <span className="text-blue-500 font-semibold">{value}</span> {currency}
    </p>
  )
}
// ============= BalanceEuro =============
function BalanceEuro({ title, value, currency }: BalanceProps): React.JSX.Element {
  return (
    <p className="text-zinc-300 rounded-md
    bg-zinc-800/60 border border-zinc-700
     text-sm p-2 flex gap-3 items-center">
      {title}
      <span className="text-blue-500 font-semibold">{value}</span> {currency}
    </p>
  )
}
// ============= CalculateCommisiion =============
function CalculateCommisiion({ title, value, currency }: CommissionProps): React.JSX.Element {
  return (
    <p className="text-zinc-300 rounded-md
    bg-zinc-800/60 border border-zinc-700
     text-sm p-2 flex gap-3 items-center">
      {title}
      <span className="text-blue-500 font-semibold">{value}</span> {currency}
    </p>
  )
}



// ==========================================================================================================
// Задача 5. Додаток містить масив об’єктів (логін, пароль) --  існуючі логіни і паролі.
// Користувач вводить логін і пароль, а програма при натисненні на кнопку повідомляє чи може користувач бути авторизованим.
// ==========================================================================================================
type User = {
  login: string
  password: string
}
const users: User[] = [
  {
    login: "admin",
    password: "1234",
  },
  {
    login: "jonh",
    password: "qwerty",
  },
  {
    login: "guest",
    password: "guest123",
  },
]

function Homework1Task5({ users }: { users: User[] }): React.JSX.Element {
  // const { userList } = users
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleValidateClick = () => {
    if (login === '' || password === '') {
      setError('Please fill out both fields!')
      console.log('Please fill out both fields!');
      return
    }
    if (login.length <= 3 || password.length <= 3) {
      setError('Not enought symbols!')
      console.log('Not enought symbols!');
      return
    }
    if (!login.trim() || !password.trim()) {
      setError('Fields is empty')
      console.log('Fields is empty');
      return
    }

    const foundUser = users.find((user) => user.login === login && user.password === password)
    if (foundUser) {
      setIsAuthorized(true)
      setError('')
      setTimeout(() => {
        setIsAuthorized(false)
      }, 3000);

    } else {
      setIsAuthorized(false)
      setError('User is not found!')
      setTimeout(() => {
        setError('')
      }, 3000);
    }
  }

  return (
    <div className="p-4 border border-gray-700 rounded bg-zinc-900/50 mb-6">
      <GenerateInputLogin label="Login:" value={login} onChange={setLogin} placeholder="Enter the Login..." />
      <GenerateInputPassword label="Password:" value={password} onChange={setPassword} placeholder="Enter the password..." />
      <GenerateButtonValidate label="Start" onClick={handleValidateClick} />

      {isAuthorized !== false && <SuccessMessage />}
      {error && <ErrorValidate value={error} />}
    </div>
  )
}

// ============ LOGIN ===========
interface PropsInputLogin {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}
function GenerateInputLogin({ label, value, onChange, placeholder = '0' }: PropsInputLogin): React.JSX.Element {
  const inputId = React.useId();

  return (
    <div className="mb-4 flex items-center">
      <label htmlFor={inputId} className="mr-4 text-zinc-300 min-w-10">
        {label}
      </label>
      <input
        type="email"
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-zinc-800 rounded pl-2 
        text-white outline-none focus:ring-1 
        focus:ring-blue-500 p-2"
      />
    </div>
  )
}
// ============ PASSWORD ===========
interface PropsInputPassword {
  label: string;
  value: number | string;
  onChange: (value: string) => void;
  placeholder?: string;
}
function GenerateInputPassword({ label, value, onChange, placeholder = '0' }: PropsInputPassword): React.JSX.Element {
  const inputId = React.useId()

  return (
    <div>
      <label htmlFor={inputId} className="mr-4 text-zinc-300 min-w-10">
        {label}
      </label>
      <input
        type="password"
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-zinc-800 rounded pl-2 
        text-white outline-none focus:ring-1 
        focus:ring-blue-500 p-2"
      />
    </div>
  )
}
// ============ BUTTON VALIDATE ===========
interface PropsBtnValidate {
  label: string;
  onClick: () => void;
}
function GenerateButtonValidate({ label, onClick }: PropsBtnValidate): React.JSX.Element {
  return (
    <button onClick={onClick}
      type="button"
      className="bg-blue-800 p-2 rounded-2xl 
      mb-2 cursor-pointer hover:bg-blue-500 
      transition duration-300">
      {label}
    </button>
  )
}
// ============ ValidateAuthorized ===========
function SuccessMessage(): React.JSX.Element {
  return (
    <p className="bg-green-600 text-white p-2 rounded text-center">
      Authorization successful
    </p>
  )
}
// ============ ERROR ===========
type PropsErrorValidate = {
  value: string;
}
function ErrorValidate({ value }: PropsErrorValidate): React.JSX.Element {
  return (
    <p className="bg-red-700 p-4 rounded-2xl text-center">{value}</p>
  )
}














