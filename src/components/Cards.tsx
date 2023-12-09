import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  message: string;
  sentAt: string;
}

const Cards = ({ message, sentAt }: Props) => {
  return (
    <Card className="border-primary/30 hover:-translate-y-1 transition-all duration-300">
      <CardContent>
        <p className="pt-3">{message}</p>
      </CardContent>
      <CardFooter>
        <CardDescription>{sentAt}</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default Cards;
