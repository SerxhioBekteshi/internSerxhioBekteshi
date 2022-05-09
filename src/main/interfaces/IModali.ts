export default interface IModali 
{
    show: boolean;
    onClose: () => void;
    content: string;
    id?: number;
    title: string;
}