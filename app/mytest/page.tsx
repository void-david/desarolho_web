import ClientComp from './ClientComp';
import ServerComp from './ServerComp';

export default function Page() {
  return (
    <div>
        <ClientComp>
            <ServerComp />
        </ClientComp>

    </div>
  );
}
