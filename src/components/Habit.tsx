
interface HabitProps {
  completed: number;
}
export default function Habit(props: HabitProps) {
  return (
    <div className='bg-zinc-900 w-10 h-10 text-white rounded-2 m-2 text-center flex items-center justify-center'>
      <h1>{props.completed}</h1>
    </div>
  );
}
