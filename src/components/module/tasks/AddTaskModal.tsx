import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"

export function AddTaskModal() {

    const form = useForm()

    const onSubmit = (data) => {
        console.log(data);

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogDescription className="sr-only">Fill up this form to add task</DialogDescription>
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)} action="">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel >Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ''} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} value={field.value || ''} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="dueData"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel >Due Date</FormLabel>
                                    <FormControl>
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            className="rounded-md border"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="priority"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel >Priority</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Theme" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="light">Light</SelectItem>
                                                <SelectItem value="dark">Dark</SelectItem>
                                                <SelectItem value="system">System</SelectItem>
                                            </SelectContent>
                                        </Select>

                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit" className="mt-5">Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}
