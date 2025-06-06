'use client';
import clsx from 'clsx';

import Button from '@/components/common/Button/Button';
import ProfileUploader from '@/components/ProfileUploader';
import FormField from '@/components/FormField';
import { useAddTeamForm } from '@/hooks/useAddTeamForm';
import { AuthPagesLayout, PageTitleStyle } from '@/styles/pageStyle';

export default function AddTeamPage() {
  const {
    name,
    previewUrl,
    nameError,
    fileError,
    submitError,
    isDisabled,
    isLoading,
    onNameChange,
    onNameBlur,
    onFileChange,
    onCreate,
  } = useAddTeamForm();

  return (
    <div className={clsx(AuthPagesLayout, 'mt-18')}>
      <h1 className={PageTitleStyle}>팀 생성하기</h1>

      <form
        className="w-full max-w-lg"
        onSubmit={(e) => {
          e.preventDefault();
          onCreate();
        }}
      >
        <span className="text-lg-medium mb-3 block">팀 프로필</span>
        <ProfileUploader fileUrl={previewUrl} error={fileError} onChange={onFileChange} />

        <FormField
          id="teamName"
          label="팀 이름"
          type="text"
          value={name}
          placeholder="팀 이름을 입력해주세요."
          error={nameError}
          maxLength={15}
          onValueChange={onNameChange}
          onBlur={onNameBlur}
        />

        {submitError && <p className="text-danger text-sm-medium mb-4">{submitError}</p>}

        <Button
          type="submit"
          disabled={isDisabled}
          className={clsx(
            'text-lg-medium h-12 w-full rounded-xl',
            isDisabled
              ? 'bg-gray400 cursor-not-allowed text-white'
              : 'bg-primary hover:bg-primary-hover active:bg-primary-pressed text-white'
          )}
        >
          {isLoading ? '생성 중…' : '생성하기'}
        </Button>
      </form>
    </div>
  );
}
