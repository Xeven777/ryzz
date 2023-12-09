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
    <Card>
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
