import { ISkill } from '@/app/types/skill'

export function SkillsCard({ skill }: { skill: ISkill }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <img className="size-12" src={skill.icon} alt={skill.name} />
      <p className="text-center text-sm hidden lg:block">{skill.name}</p>
    </div>
  )
}
