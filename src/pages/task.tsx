import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook"

export default function Task() {

    const tasks = useAppSelector(selectTasks)
    const filter = useAppSelector(selectFilter)
    console.log(tasks);

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between items-center">
                <h1>Tasks</h1>
                <AddTaskModal />
            </div>
            <div className="space-y-5 m t-5">
                {
                    tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))
                }
            </div>
        </div>
    )
}