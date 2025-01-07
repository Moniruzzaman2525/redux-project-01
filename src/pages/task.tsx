import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook"

export default function Task() {

    const tasks = useAppSelector(selectTasks)
    const filter = useAppSelector(selectFilter)
    console.log(tasks);

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div>
                <h1>Tasks</h1>
            </div>
            <div className="space-y-5 m t-5">
                {
                    tasks.map((task) => (
                        <TaskCard task={task} />
                    ))
                }
            </div>
        </div>
    )
}