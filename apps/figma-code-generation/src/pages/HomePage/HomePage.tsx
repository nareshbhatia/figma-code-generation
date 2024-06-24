import { BaseContainer } from '@/components/BaseContainer';

export function HomePage() {
  return (
    <BaseContainer
      className="container relative mx-auto max-w-screen-xl flex-1 bg-elevation1"
      px="default"
      py="compact"
    >
      This app is bootstrapped with{' '}
      <a className="text-blue-600" href="https://code-shaper.dev">
        Code Shaper
      </a>
      .
    </BaseContainer>
  );
}
