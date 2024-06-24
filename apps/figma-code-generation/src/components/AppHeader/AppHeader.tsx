import { BaseContainer } from '@/components/BaseContainer';
import { Button } from '@/components/Button';

export function AppHeader() {
  return (
    <header className="w-full">
      <BaseContainer
        className="container mx-auto flex h-14 max-w-screen-xl items-center gap-2 bg-elevation1"
        px="default"
      >
        <span className="font-bold">Figma Code Generation</span>
        <div className="flex flex-1 justify-end">
          <Button>Sign In</Button>
        </div>
      </BaseContainer>
    </header>
  );
}
